function add(){
    var obj = document.getElementById("add");
    var obj2 = document.getElementById("add_text");
    if(obj.style.display == "none"){
        obj.style.display = ""
        obj2.innerHTML = "取消";
    }
    else{
        obj.style.display = "none";
        obj2.innerHTML = "添加";
    }
}


function find_manager(){
        var xhr;
        if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
        }
        value = document.getElementById("manager_id").value;
        url ="/info/manager/find_manager/" + value;
        xhr.open("GET",url,true);

        xhr.onreadystatechange=function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            var data = xhr.responseText;
            data = JSON.parse(data);
            var obj = document.getElementById("manager_error");
            if(data.status == 0){
                obj.innerHTML = "已在管理其他宿舍楼！";
                document.getElementById("manager_name").innerHTML = data.name;
                document.getElementById("manager_sex").innerHTML = data.sex;
                document.getElementById("building").value = data.building;
                document.getElementById("building_show").innerHTML = data.building;
            }
            else if(data.status == 1){
                obj.innerHTML = "";
                document.getElementById("manager_name").innerHTML = data.name;
                document.getElementById("manager_sex").innerHTML = data.sex;
                document.getElementById("building").value = data.building;

            }
            else if(data.status == 2){
                obj.innerHTML = "不存在！";

            }
            }
        }
        xhr.send();
}


function check_error(){
    var obj = document.getElementById("manager_error");
    if(obj.innerHTML == ""){
        return true;
    }
    else{
        return false;
}
}