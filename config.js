/* Magic Mirror Config Sample

By Michael Teeuw http://michaelteeuw.nl
MIT Licensed.
*/
var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    language: 'en',
    timeFormat: 12,
    units: 'metric',

    modules: [{
            module: 'email',
            position: 'bottom_left',
            header: 'Email',
            config: {
                accounts: [{
                    user: 'xxxxx@gmail.com',
                    password: 'xxxxx',
                    host: 'imap.gmail.com',
                    port: 993,
                    tls: true,
                    authTimeout: 10000,
                    numberOfEmails: 2,
                }, ],
                fade: true,
                maxCharacters: 30
            }
        },
        {
            module: 'MMM-PrayerTime',
            position: 'top_left',
            config: {
                apiVersion: '1.0',
                lat: 25.258169,
                lon: 55.304722,
                timezone: true,
                method: 4,
                playAdzan: ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'],
                notDisplayed: ['midnight', 'sunset'],
                useUpdateInterval: true,
                updateInterval: 86400 * 1000,
                animationSpeed: 2.5 * 1000,
                language: config.language,
                showAdzanAlert: true,
                alertTimer: 15000
            }
        },
        {
            module: "alert",
        },
        {
            module: 'MMM-ModuleScheduler'
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "calendar",
            header: "UAE Holidays",
            position: "top_left",
            config: {
                calendars: [{
                    symbol: "calendar-check-o ",
                    url: "webcal://www.calendarlabs.com/templates/ical/UAE-Holidays.ics"
                }]
            }
        },
        {
            module: "compliments",
            position: "lower_third"
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "Dubai",
                locationID: "292223", //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "xxxx"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "Dubai",
                locationID: "292223", //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "xxx"
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [{
                    title: "New York Times",
                    url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                }],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
