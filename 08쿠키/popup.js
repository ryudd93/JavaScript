function createCookie(name) {
    
    // 1. 쿠키 생명 주기
    var date = new Date();
    date.setDate(date.getDate() + 1);   //1일 설정

    // 2. 쿠키 형식 설정
    var cookie = "";
    cookie += name + "=true;";  //쿠키 이름, 값 설정
    cookie += "expires=" + date.toUTCString();
    document.cookie = cookie;

}


function getCookie(name) {
    var cookies = document.cookie.split("; ");    //쿠키 자르기
    console.log(cookies);

    for(var i in cookies) {
        if(cookies[i].search(name) != -1) { //쿠키를 탐색
            return true;
        }
    }

    // 아무값이 없다면 return false

}