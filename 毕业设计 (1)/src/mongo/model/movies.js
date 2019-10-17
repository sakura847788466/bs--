 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let moviesSchema=new Schema({
    status:{type:String,required:true},
    data:{type:Object,required:true},
    mas:{type:String,required:true},
    

 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let movies=mongoose.model('movies',moviesSchema);

module.exports=movies
//抛出数据模型