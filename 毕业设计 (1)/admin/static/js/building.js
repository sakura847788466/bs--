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

function exist(){
		var xhr;
		if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
		}
		value = document.getElementById("name_text").value;
		url ="check_exist_"+value;
		xhr.open("GET",url,true);

		xhr.onreadystatechange=function(){

		if(xhr.readyState == 4 && xhr.status == 200){
			var data = xhr.responseText;
			data = JSON.parse(data);
			if(data.content == "1"){
			    var obj = document.getElementById("name_text");
			    obj.value = "编号重复！";
			}
			}
		}
		xhr.send();
		}

		function check_exist(){
            var obj = document.getElementById("text_name");
            if(obj.value == "编号重复！"){
                return false;
            }
            else{
                return true;
            }
		}