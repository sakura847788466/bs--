 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let roomSchema=new Schema({
    // _id:{type:Number,required:true},
    num:{type:String,required:true},
    bedNum:{type:String,required:true},
    roomed:{type:String,required:true},
    bedNum:{type:String,required:true},
    canRoom:{type:String,required:true}
 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let room=mongoose.model('room',roomSchema);

module.exports=room
//抛出数据模型