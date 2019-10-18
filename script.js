function GetURL() {
    alert ("Page URL: " + window.location.href)
}


function setCookie(cookieName, cookieValue, expireTime, path) {
    var j = new Date;
    j.setTime(j.getTime());
    expireTime && (expireTime *= 864E5);    // 864E5 =  1000*60*60*24 то есть 24 часа в миллисекундах
    j = new Date(j.getTime() + expireTime);
    document.cookie = cookieName + "=" + cookieValue + (expireTime ? ";expires=" + j.toGMTString() : "") + (path ? ";path=" + path : "")
}

function writeLogic(cookieName) {
    var cookieValue = getTrafficSource(cookieName, 'https://icycrumb.github.io');  // Домен
    setCookie(cookieName, cookieValue, 182, "/")        // 182 (дня) - это полгода
};

function getParam(s, q) {
    try {
        var match = s.match('[?&]' + q + '=([^&]+)');
        return match ? match[1] : '';
    } catch(e) {
        return '';
    }
}

function calculateTrafficSource() {
    var source='', medium=''
    var search_engines = [['bing', 'q'], ['google', 'q'], ['yahoo', 'q'], ['baidu', 'q'], ['yandex', 'q'], ['ask', 'q']];	// Список поисковиков
    ref = ref.substr(ref.indexOf('//')+2);
    ref_domain = ref;

    var url_search = document.location.search;

    if(url_search.indexOf('utm_source') > -1) {
        source = getParam(url_search, 'utm_source');
        medium = getParam(url_search, 'utm_medium');
    }
    else if (getParam(url_search, 'gclid')) {
        source = 'google';
        medium = 'cpc';
    }
    else if(ref) {

        medium = 'referral';
        source = ref_domain;
        // Для органического поиска
        for (var i=0; i<search_engines.length; i++) {
            if(ref_domain.indexOf(search_engines[i][0]) > -1) {
                medium = 'organic';
                source = search_engines[i][0];
                break;
            }
        }
    }

    return {
        'source'  : source,
        'medium'  : medium
    };
}

function getTrafficSource(cookieName, hostname) {

        var trafficSources = calculateTrafficSource();
        var source = trafficSources.source;
        var medium = trafficSources.medium;

        var rightNow = new Date();
        var value = source + ' / '  + medium

        return value;
}
;


// Self-invoking function
(function() {

    if (document.referrer < 0) {
        break;
    } else {
        writeLogic('TrafficSource');
    }

})();
