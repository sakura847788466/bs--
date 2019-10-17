 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let goodsSchema=new Schema({
 	name:{type:String,required:true},
 	type:{type:String,required:true},
 	desc:{type:String,required:true},
 	price:{type:String,required:true},
 	imgpath:{type:String,required:true},
 	stock:{type:Number,required:true},
 	grounding:{type:Boolean,default:false}

 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
//抛出数据模型