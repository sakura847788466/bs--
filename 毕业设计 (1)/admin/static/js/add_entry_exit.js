function find_student(){
        var xhr;
        if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
        }
        value = document.getElementById("student_id").value;
        url ="/apartment/entry_exit/add/find_student/" + value;
        xhr.open("GET",url,true);

        xhr.onreadystatechange=function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            var data = xhr.responseText;
            data = JSON.parse(data);
            var obj = document.getElementById("student_error");
            if(data.status == 1){
                obj.innerHTML = "";
                document.getElementById("student_name").innerHTML = data.name;
                document.getElementById("student_sex").innerHTML = data.sex;
                document.getElementById("room").innerHTML = data.room;
            }
            else if(data.status == 2){
                obj.innerHTML = "学生不存在!";
                document.getElementById("student_name").innerHTML = "";
                document.getElementById("student_sex").innerHTML = "";
                document.getElementById("student_class").innerHTML = "";
                document.getElementById("student_room").innerHTML = "";
            }
            else{
                obj.innerHTML = "";
                document.getElementById("student_name").innerHTML = data.name;
                document.getElementById("student_sex").innerHTML = data.sex;
                document.getElementById("student_room").innerHTML = data.room;
            }
            }
        }
        xhr.send();
}
