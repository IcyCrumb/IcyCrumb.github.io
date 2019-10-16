function GetURL() {
    alert ("Page URL: " + window.location.href)
    //return window.location.href
}




function SetCookie(value) {

    var TrafficSourceValue = ""

    var AdvertisingSubstring = "utm_source"
    var YandexAdvertisingSubstring = "yandex_direct_name"
    var GoogleAdvertisingSubstring = "gclid"

    if ( value.includes(GoogleAdvertisingSubstring) ) {
        TrafficSourceValue = "google / cpc"
    }

    else if ( value.includes(AdvertisingSubstring) && value.includes(YandexAdvertisingSubstring) ) {
        TrafficSourceValue = "yandex / cpc"
    }

    else {
        TrafficSourceValue = "organic or direct"
    }


    document.cookie = "TrafficSource=" + TrafficSourceValue + "; path=/"


    return
}



var CurrentUrl = window.location.href       //GetURL()
SetCookie(CurrentUrl)



//alert(document.cookie);
alert(document.referrer);
