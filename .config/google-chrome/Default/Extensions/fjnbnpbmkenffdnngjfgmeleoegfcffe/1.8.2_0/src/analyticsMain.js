// Standard Google Universal Analytics code
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); // Note: https protocol here

let gaID = "UA-8246384-4";
if (utils.isChineseBrowser()) {
    gaID = "UA-8246384-8";
}
ga('create', gaID, 'auto');
ga('set', 'checkProtocolTask', function () {
}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200

const version = chrome.runtime.getManifest().version;

const sampleGA = [ // 0 = never, 1 = always, others as the % for 1/X
    {category: 'general', action: 'style_load', sample: 1000},
    {category: 'general', action: 'stylish_load', sample: 1000},
    {category: 'installed_styles_menu', action: null, sample: 100},
    {category: 'library_menu', action: null, sample: 100},
    {category: 'manage_installed_styles', action: null, sample: 100}
];

function analyticsMainEventReport(category, action, label, value) {

    label = label + " & " + version;
    if (typeof ga !== "function")
        return;

    for (const event of sampleGA) {
        //should meet category, and action if having action, otherwise - all events.
        if (event.category == category.toLowerCase() && ((event.action && event.action == action.toLowerCase()) || !event.action)) {
            //should match the sampling rule: 1 of X.
            if (event.sample > 0 && (Math.floor(event.sample * Math.random()) + 1 ) == 1) {
                ga('send', 'event', category, action, label, value);
            }
            return; //won't call the event: not again and as a fallback, as below.
        }
    }

    //will send the event anyhow, as no sample rule was found.
    ga('send', 'event', category, action, label, value);

}

function analyticsReduce(category, action, label, value) {
    if (localStorage.hasOwnProperty("GA_send_events") && localStorage.GA_send_events == "true") {
        analyticsMainEventReport(category, action, label, value);
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.gacategory)
        analyticsReduce(request.gacategory, request.gaaction || null, request.galabel || null, request.gavalue || null);
});

class Retension {
    constructor(conf) {
        this.Storage = conf.Storage;
        this.TrackGAEvents = conf.TrackGAEvents;
        this.lastRetentionDay = 28;
        this.minHoursFromInstall = 8;

        this.Storage.requestGet().then(data => {
            this.data = this.initialize(data);

            this.report();
        });
    }

    initialize(data) {
        if (data && data.installDate && data.sentDays) {
            return data;
        } else {
            data = data || {};
            data.installDate = data.installDate ? data.installDate : Date.now();
            data.sentDays = data.sentDays || {};

            this.Storage.requestSet(data);

            return data;
        }
    }

    report() {
        if (!this.data.completed) {
            let now = new Date();
            let installDate = new Date(this.data.installDate);
            let installStart = this.getDateStart(installDate);
            let todayStart = this.getDateStart(now);
            let msStartDiff = Math.abs(todayStart - installStart);
            let hoursFromTrueInstall = Math.floor((now - installDate) / (1000 * 60 * 60));
            let daysDiff = Math.floor(msStartDiff / (1000 * 60 * 60 * 24));

            if (daysDiff > 0 && daysDiff <= this.lastRetentionDay) {
                if (!this.data.sentDays[daysDiff] && hoursFromTrueInstall > this.minHoursFromInstall) {
                    this.TrackGAEvents(daysDiff);

                    this.data.sentDays[daysDiff] = true;
                    this.Storage.requestSet(this.data);
                }

                setTimeout(this.report.bind(this), 1000 * 60 * 60);
            } else if (daysDiff > this.lastRetentionDay) {
                this.data.completed = true;

                this.Storage.requestSet(this.data);
            }
        }
    }

    getDateStart(date) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            (date.getHours() >= 0 && date.getHours() < 5) ? date.getDate() - 1 : date.getDate(),
            5, 0, 1
        ); //day starts at 5PM
    }
}

if (undefined === localStorage.GA_send_events) {
    //sampling one of 1000 users.
    if (42 === Math.floor(Math.random() * 1000)) {

        localStorage.GA_send_events = true;
        analyticsMainEventReport("General", "enabled");

    } else {
        localStorage.GA_send_events = false;
    }
}

if (localStorage.hasOwnProperty("GA_send_events") && localStorage.GA_send_events == "true") {

    new Retension({
        Storage: {
            requestGet: function () {
                return new Promise(function (resolve) {
                    try {
                        resolve(localStorage.STDATA ? JSON.parse(localStorage.STDATA) : {});
                    } catch (e) {
                        resolve({});
                    }
                });
            },

            requestSet: function (data) {
                return new Promise(function (resolve) {
                    localStorage.STDATA = JSON.stringify(data);
                    resolve();
                });

            }
        },
        TrackGAEvents: function (xDay) {
            analyticsMainEventReport('General', 'Retained {0} day'.replace('{0}', xDay));
        }
    });

}


//it is garbage collector, remove it from the next release. cur version is 1.7.9
Object.keys(localStorage).forEach(function (l) {
    if (/^General.*/.test(l))
        delete localStorage[l];
});





