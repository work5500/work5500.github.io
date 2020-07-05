checkCookie()

// 获取 cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}

// 检验 cookie
function checkCookie() {
    var user=getCookie("mto"); 
    if (user != "mto100") {
        // 阻塞
        while(true){}
    }
}
