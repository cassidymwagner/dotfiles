var STORAGE_ITEM_NAME = "_site2Code";

//MIME types to work on
var TARGET_MIME_TYPE = [
    /^text\/[\w-.]+/i,
    /^application\/json/i,
    /^application\/(x-)?javascript/i,
    /^application\/(xhtml+)?xml/i
];

var TEXT_CODING_MAP = {
    //name --> [language, code] map
    "default"       :   ["Use_page_default"],
    
    "utf-8"         :   ["Unicode", "UTF-8"],
    "utf-16le"      :   ["Unicode", "UTF-16LE"],
    
    "windows-1256"  :   ["Arabic", "Windows-1256"],
    "iso-8859-6"    :   ["Arabic", "ISO-8859-6"],
    
    "iso-8859-4"    :   ["Baltic", "ISO-8859-4"],
    "iso-8859-13"   :   ["Baltic", "ISO-8859-13"],
    "windows-1257"  :   ["Baltic", "Windows-1257"],
    
    "iso-8859-14"   :   ["Celtic", "ISO-8859-14"],
    "iso-8859-2"    :   ["Central_European", "ISO-8859-2"],
    "windows-1250"  :   ["Central_European", "windows-1250"],
    
    "gbk"           :   ["Chinese_Simplified", "GBK"],
    "gb18030"       :   ["Chinese_Simplified", "GB18030"],
    "big5"          :   ["Chinese_Tranditional", "Big5"],
    
    "iso-8859-5"    :   ["Cyrillic", "ISO-8859-5"],
    "windows-1251"  :   ["Cyrillic", "Windows-1251"],
    "KOI8-R"        :   ["Cyrillic", "KOI8-R"],
    "KOI8-U"        :   ["Cyrillic", "KOI8-U"],
    "IBM866"        :   ["Cyrillic", "IBM866"],
    
    "iso-8859-7"    :   ["Greek", "ISO-8859-7"],
    "windows-1253"  :   ["Greek", "Windows-1253"],
    
    "windows-1255"  :   ["Hebrew", "Windows-1255"],
    "iso-8859-8-I"  :   ["Hebrew", "ISO-8859-8-I"],
    "iso-8859-8"    :   ["Hebrew", "ISO-8859-8"],
    
    "shift_jis"     :   ["Japanese", "Shift JIS"],
    "euc-jp"        :   ["Japanese", "EUC-JP"],
    "iso-2022-jp"   :   ["Japanese", "ISO-2022-JP"],
    
    "ks_c_5601-1987":   ["Korean"],
    "euc-kr"        :   ["Korean", "EUC-KR"],   //specially added
    
    "iso-8859-10"   :   ["Nordic", "ISO-8859-10"],
    //Romanian?
    
    "iso-8859-3"    :   ["South_European", "ISO-8859-3"],
    
    "windows-874"   :   ["Thai", "Windows-874"],
    
    "iso-8859-9"    :   ["Turkish", "ISO-8859-9"],
    "windows-1254"  :   ["Turkish", "Windows-1254"],    //specially added

    "windows-1258"  :   ["Vietnamese", "Windows-1258"],
    
    "iso-8859-15"   :   ["Western", "ISO-8859-15"],
    "macintosh"     :   ["Western", "Macintosh"],                    
    "windows-1252"  :   ["Western", "Windows-1252"] //specially added
};

var g_site2Code = JSON.parse(localStorage.getItem(STORAGE_ITEM_NAME) || "{}");


var g_escapeContainer = document.createElement('textarea');
function escapeHTML(html) {
    g_escapeContainer.textContent = html;
    return g_escapeContainer.innerHTML;
}

//extract site url pattern from page url
//this pattern servers as index for site-->code map, which is saved in local storage
function extract_site_url_pattern(url) {
    if (typeof(url) !== "string"){
        return "Newtab";
    }
    
    var fragments = url.split('/').slice(0, 3);
    return fragments.join("/") + "/*";
}

function find_matched_mime (header){
    for (var i = 0; i < TARGET_MIME_TYPE.length; i++){
        var result = header.match(TARGET_MIME_TYPE[i]);
        if (result){
            return result[0];
        }
    }
    return null;
}

function onHeadersReceivedHandler(details) {
    //console.log("Header received:" + JSON.stringify(details));
    var url_pattern = extract_site_url_pattern(details.url);    
    if (g_site2Code[url_pattern]) {
        var is_type_header_found = false;   //default value, to be updated later
        
        var my_code = g_site2Code[url_pattern];
        var my_content_type = 'text/html; charset='+ my_code;   //default content type
        var headers = details.responseHeaders;                
        
        for(var i = 0; i < headers.length; i++){
            var header = headers[i];
            if(header.name.toLowerCase() == 'content-type'){
                is_type_header_found = true;
                
                var matched = find_matched_mime(header.value.toLowerCase().trim());
                                
                if (matched && TEXT_CODING_MAP[my_code]){
                    header.value = matched + '; charset='+ my_code;                
                    //console.log("change header coding to " + my_code + ", url =" + details.url);
                }
                else{
                    //not a target MIME, do nothing                    
                    //console.log("non-target content-type found: " + header.value);
                }
                
                break;
            }
        }
        
        if (! is_type_header_found){
            headers.push({
                name    : "content-type",
                value   : my_content_type  
            });
            //console.log("Add coding header " + my_code + " for url =" + details.url);
        }  
        return {responseHeaders:headers};    
    }
    else{
        return {};
    }
}

chrome.webRequest.onHeadersReceived.addListener(
    onHeadersReceivedHandler, 
    {
        urls: ["<all_urls>"],
    }, 
    ['blocking', 'responseHeaders']
); 

function isHTMLFile(url){
    if (url.match(/\.html?$/i)){
        return true;
    }
    return false;
}

//load local file with specified character set
function loadLocalFile(url, new_code, tabId){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("text/plain; charset=" + new_code);

    xhr.onload = function() {
        var is_html = isHTMLFile(url);
        
        var mime_marker = is_html ? "html" : "plain";                
        var doc_contents = is_html?
                'decodeURI("' + encodeURI(xhr.responseText) + '")' :
                '"<pre>" + decodeURI("'+ encodeURI(escapeHTML(xhr.responseText)) +'") + "</pre>"';
                
        var code_inject =     
            'var newDoc = document.open("text/' + mime_marker + '", "replace");'+
            'newDoc.write(' + doc_contents + ');' +
            'newDoc.close();';
        
        chrome.tabs.executeScript(tabId, {code : code_inject}, function(){
            //console.log("Code injection done");
        }); 
    };
    xhr.onerror = function() {
        //Todo: check error reason?
        chrome.tabs.create({ url: chrome.i18n.getMessage("msgPage")});
    };
    xhr.open('GET', url, true);

    try{
        xhr.send();
    }
    catch(e){
        console.error("failed to send xhr");  
    }
}

// The onClicked callback function.
function onClickHandler(info, tab) {
    var new_code = info.menuItemId;
    var flg_need_reload = false;
    
    if (TEXT_CODING_MAP[new_code]){ //some codes may be removed from menu due to version-up
        var url_pattern = extract_site_url_pattern(tab.url);
        
        if (new_code == "default"){
            delete(g_site2Code[url_pattern]);  
            flg_need_reload = true;
        }
        else{
            if (url_pattern == "file:///*"){
                loadLocalFile(tab.url, new_code, tab.id);
            }        
            else{
                g_site2Code[url_pattern] = new_code;
                flg_need_reload = true;
            }
        }

        localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(g_site2Code));
        
        if (flg_need_reload){
            chrome.tabs.update(tab.id, {url: tab.url}); 
        }
    }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

//update selected coding every time new page loaded
//this action may be expensive
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {    
    if (changeInfo.status === "complete") {
        //update context menu   
        var url_pattern = extract_site_url_pattern(tab.url);
        var my_code = g_site2Code[url_pattern] || "default";
        
        //update menu status
        for (var menuId in TEXT_CODING_MAP){
            chrome.contextMenus.update(menuId, {
                "checked"   :   false
            });
        }

        chrome.contextMenus.update(my_code, {
            "checked"   :   true
        });  
    }
});   

// Set up context menu at install time.
//chrome.runtime.onInstalled.addListener(function() {
    for (var code in TEXT_CODING_MAP){
        var temp = TEXT_CODING_MAP[code];
        var language = chrome.i18n.getMessage(temp[0]);
        var menu_title = language;
        
        if (temp[1]){
            menu_title += " ("+ temp[1] + ")";
        }
    
        chrome.contextMenus.create({
            "title": menu_title, 
            "type"  : "radio",
            "contexts":["page"], 
            "id": code
        });
    }   
//});
