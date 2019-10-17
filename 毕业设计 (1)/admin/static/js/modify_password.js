
function check_password(){
    var obj = document.getElementById("password").value;
    var error = document.getElementById("password_error")
    if(obj == ""){
        error.innerHTML = "密码不能为空！"
    }
    else if(obj.length < 5){
        error.innerHTML = "密码不能低于5位数！"
    }
    else if(obj.length > 20){
        error.innerHTML = "密码不能超过20位数！"
    }
    else{
        error.innerHTML = ""
        return 1
    }
}


function check_new_password(){
    var obj = document.getElementById("new_password").value;
    var error = document.getElementById("new_password_error")
    if(obj == ""){
        error.innerHTML = "密码不能为空！"
    }
    else if(obj.length < 5){
        error.innerHTML = "密码不能低于5位数！"
    }
    else if(obj.length > 20){
        error.innerHTML = "密码不能超过20位数！"
    }
    else{
        error.innerHTML = ""
        return 1
    }
}


function check_repeat_password(){
    var obj = document.getElementById("new_password").value;
    var obj2 = document.getElementById("repeat_password").value;
    var error = document.getElementById("repeat_password_error")
    if(obj == obj2){
        error.innerHTML = ""
        return 1
    }
    else{
        if(obj2 == ""){
            error.innerHTML = "请再次输入密码！"
        }
        else{
            error.innerHTML = "两次输入密码不一致！"
        }

    }
}

function check(){
    q = check_password();
    q2 = check_new_password();
    q3 = check_repeat_password();
    if(q == 1 && q2 == 1 && q3 == 1){
        return true;
    }
    else{
        return false;
    }
}
