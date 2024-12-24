//gets called in redirection
function getlanguageCookie() {
    var res = getCookie("language");
    if (!res)
        res = "ar";
    return res;
}

function setlanguageCookie () {
    var res = document.documentElement.getAttribute('lang');
    if (res)
        setCookie("language", res, 365);
}

//To update language on load  should be done before getting lang var
setlanguageCookie();
var language = getlanguageCookie();
var isArabic = () => language == "ar";
var isEnglish = () => language == "en";




