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



/*
function removeCookie() {
    var removing = browser.cookies.remove({
        //url: tabs[0].url,
        name: "URL"
    })
}
;
function removeCookie();
*/
 
/*
function CreateCookie(name,value,days) {
     if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
     }
     else var expires = "";
     document.cookie = name+"="+value+expires+";";
}
 */

/*
function DeleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


DeleteCookie(URL)
DeleteCookie(PageURL)
*/

/*
document.cookie = "URL=URLString; expires=3600; path=/"
alert(document.cookie)
*/


// специальные символы (пробелы), требуется кодирование

//let URLString = GetURL()

// кодирует в my%20name=John%20Smith
//document.cookie = encodeURIComponent(URL) + '=' + encodeURIComponent(URLString);



//document.cookie = "CurrentCookieString=file:///Users/ludochka/Documents/%D0%A1%D0%90%D0%98%D0%A2/hello.html; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/"
//document.cookie = "URL=URLString; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/"
//document.cookie = "PageURL=GetURL(); expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/"
//document.cookie = "my%20name=John%20Smith; expires = Thu, 01 Jan 1970 00:00:00 GMT"
//document.cookie = "function%20URL()%20%7B%0A%20%20%20%20%5Bnative%20code%5D%0A%7D=file%3A%2F%2F%2FUsers%2Fludochka%2FDocuments%2F%25D0%25A1%25D0%2590%25D0%2598%25D0%25A2%2Fhello.html; expires = Thu, 01 Jan 1970 00:00:00 GMT"

alert(document.cookie); // ...; my%20name=John%20Smith