function getThemeCookie() {
    var res = getCookie("theme");
    if (!res)
        res = "light";
    return res;
}

var theme = getThemeCookie();
var isLight = () => theme == "light";
var isDark = () => theme == "dark";
var setThemeCookie = (theme) => setCookie("theme", theme, 365);

function setTheme(themee) {
    setThemeCookie(themee);
    theme = themee;
    document.documentElement.setAttribute('data-bs-theme', themee);
}

function toggleTheme() {
    if (isLight()) {
        setTheme("dark");
    } else if (isDark()) {
        setTheme("light");
    }
}

//To update theme on load
setTheme(theme);
