function add() {
    var obj = document.getElementById("add");
    var obj2 = document.getElementById("add_text");
    if (obj.style.display == "none") {
        obj.style.display = ""
        obj2.innerHTML = "取消";
    } else {
        obj.style.display = "none";
        obj2.innerHTML = "添加";
    }
}


function find_student() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    value = document.getElementById("student_id").value;
    url = "/info/student/find_student/" + value;
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            data = JSON.parse(data);
            var obj = document.getElementById("student_error");
            if (data.status == 0) {
                obj.innerHTML = "学生已入住";
                document.getElementById("student_id").innerHTML = data.id;
                document.getElementById("student_name").innerHTML = data.name;
                document.getElementById("student_sex").innerHTML = data.sex;
                document.getElementById("student_class").innerHTML = data.class;
                document.getElementById("date").value = data.date;
                document.getElementById("is").innerHTML = data.checkin_status;
                document.getElementById("status").value = data.checkin_status;
                document.getElementById("room").value = data.room;
            } else if (data.status == 1) {
                obj.innerHTML = "";
                document.getElementById("student_name").innerHTML = data.name;
                document.getElementById("student_sex").innerHTML = data.sex;
                document.getElementById("student_class").innerHTML = data.class;
            } else if (data.status == 2) {
                obj.innerHTML = "学生不存在";
                document.getElementById("student_name").innerHTML = "";
                document.getElementById("student_sex").innerHTML = "--";
                document.getElementById("student_class").innerHTML = "--";
                document.getElementById("date").value = "";
                document.getElementById("is").innerHTML = "";
                document.getElementById("status").value = "";
                document.getElementById("room").value = "";
            }
        }
    }
    xhr.send();
}


function find_room() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    value = document.getElementById("room").value;
    url = "/info/student/find_room/" + value;
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            data = JSON.parse(data);
            var obj = document.getElementById("room_error");
            if (data.status == 0) {
                obj.innerHTML = "宿舍人已满";

            } else if (data.status == 1) {
                obj.innerHTML = "";

            } else if (data.status == 2) {
                obj.innerHTML = "宿舍不存在";

            }
        }
    }
    xhr.send();
}


function check_error() {
    var obj = document.getElementById("student_error");
    var obj2 = document.getElementById("room_error");
    if (obj.innerHTML == "" && obj2.innerHTML == "") {
        return true;
    } else {
        return false;
    }
}