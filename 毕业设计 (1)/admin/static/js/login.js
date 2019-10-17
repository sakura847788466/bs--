//按需引入api文件, 但后面会导致删除麻烦的问题.
active(0)

function active(num) {
    var tabs = document.getElementsByClassName("tab_item");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");

        tabs[i].firstElementChild.style.background = "orange";
        tabs[i].firstElementChild.style.color = "white";
    }
    tabs[num].classList.add("active");
    tabs[num].firstElementChild.style.color = "orange";
    tabs[num].firstElementChild.style.background = "white";

    if (num == 0) {
        // document.getElementById("form").action = "../student/index.html";
        // document.getElementById("form").action = "http://127.0.0.1:3000/index.html";

    } else if (num == 1) {
        // document.getElementById("form").action = "../apartment_manager/index.html";
    } else if (num == 2) {
        // document.getElementById("form").action = "../info_manager/index.html";
    }
}



function id_check() {
    var user_id = document.getElementById("user_id").value;
    if (user_id.length == 11) {
        document.getElementById("id_error").innerHTML = "";
        return 1;
    } else if (user_id == "") {
        document.getElementById("id_error").innerHTML = "账号不能为空！";
    } else {
        document.getElementById("id_error").innerHTML = "账号格式为11位数！";
    }
}

function password_check() {
    var user_id = document.getElementById("password").value;
    if (user_id.length > 0) {
        document.getElementById("password_error").innerHTML = "";
        return 1;
    } else if (user_id == "") {
        document.getElementById("password_error").innerHTML = "密码不能为空！";
    } else {
        document.getElementById("password_error").innerHTML = "账号格式为10位数！";
    }
}


function check() {
    id = id_check()
    password = password_check()
    if (id == 1 && password == 1) {
        return true;
    } else {
        return false;
    }
}