// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var js = '//cdn.printfriendly.com/printfriendly.js';
  var url = "javascript:(function(){if(window['priFri']){window.print()}else{pfstyle='cbk';_pnicer_script=document.createElement('SCRIPT');_pnicer_script.type='text/javascript';_pnicer_script.src='" + js + "';document.getElementsByTagName('head')[0].appendChild(_pnicer_script);}})();";
  chrome.tabs.update(tab.id, {url: url});
});

document.addEventListener('DOMContentLoaded', function () {
  var currentIcon = localStorage["pf_icon"];
  if (currentIcon) {
    chrome.browserAction.setIcon({
      path: "images/" + currentIcon + ".png"
    });
  }
});
