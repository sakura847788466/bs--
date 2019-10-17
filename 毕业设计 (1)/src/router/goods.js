const express=require('express');
const Router=express.Router();
  const email=require('./sendmail.js')

//数据模型引入
const Goods=require('../mongo/model/goods.js')
const User = require('../mongo/model/user.js')
const Movies = require('../mongo/model/movies.js')
const Room = require('../mongo/model/room.js')
const Students = require('../mongo/model/student.js')
const Repair = require('../mongo/model/repair.js')




//增加商品
//添加商品信息

/**
 * @api {post} /goods/addGoods/ addGoods
 * @apiName addGoods
 * @apiGroup goods
 *
 * @apiParam {String} name  商品名称
 * @apiParam {String} type 商品类型
 * @apiParam {String} desc 商品描述
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {Number} stock 商品余额
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/addGoods',(req,res)=>{
// 1.接受数据
  let {name,type,desc,price,imgpath,stock}=req.body
 Goods.insertMany({name,type,desc,price,imgpath,stock})
 .then((data)=>{
 	res.send({err:0,msg:'插入成功',data:null})
 })
 .catch((err)=>{

 	console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})
//查询商品

/**
 * @api {post} /goods/getGoods/ getGoods
 * @apiName getGoods
 * @apiGroup goods
 *
 * @apiParam {Number} pagesize  每页数量
 * @apiParam {Number} page 当前页数
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/getGoods',(req,res)=>{
  // Goods.find()查询所有
  // Goods.find({tyle:‘音乐’})//分类查询
  // Goods.find().limit(5).skip(5)//分页查询
  // 1页2条
  // 2   0
  // 2   2
  // 2   4
  // let pagesize=2//每页的条数
  // let page=1//页数o
  let  {pagesize,page}=req.body
  // console.log(pagesize)
  // console.log(page)
  Movies.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  .then((data)=>{
  	res.send({err:0,msg:'查询成功',data:data})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'查询错误',data:null})
  })

})


//民师院学生宿舍信息
Router.post('/getRoom',(req,res)=>{
  // Goods.find()查询所有
  // Goods.find({tyle:‘音乐’})//分类查询
  // Goods.find().limit(5).skip(5)//分页查询
  // 1页2条
  // 2   0
  // 2   2
  // 2   4
  // let pagesize=2//每页的条数
  // let page=1//页数o
  // let  {pagesize,page}=req.body
  // console.log(pagesize)
  // console.log(page)
  // Room.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  Room.find()
  .then((data)=>{
    res.send({err:0,msg:'查询成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询错误',data:null})
  })

})


//student模块
Router.post('/getStudent',(req,res)=>{
    let  {pagesize,page}=req.body
 Students.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  .then((data)=>{
    res.send({err:0,msg:'添加成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询错误',data:null})
  })

})

//学号查询
// m模糊查询 关键字查询
Router.post('/findNum',(req,res)=>{
    let nunm = req.body.num;
    console.log(nunm)
   Students.find({num:{$regex:nunm}})
  .then((data)=>{
    res.send({err:0,msg:'关键字查询成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'关键字查询失败',data:null})
  })

})
//删除学生  学号删除
Router.post('/delNum',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let num=req.body.num;
  Students.remove({num:num})
  .then((data)=>{
    res.send({err:0,msg:'删除成功',data:null})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'删除失败',data:null})
  })

})
//添加学生
Router.post('/addStudent',(req,res)=>{
     let {num,bedNum,sex,name,banji,time,stutas}=req.body
 Students.insertMany({num,bedNum,sex,name,banji,time,stutas})

  .then((data)=>{
    res.send({err:0,msg:'添加成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败',data:null})
  })

})



//获取用户名
Router.post('/getInfouser',(req,res)=>{
  // Goods.find()查询所有
  // Goods.find({tyle:‘音乐’})//分类查询
  // Goods.find().limit(5).skip(5)//分页查询
  // 1页2条
  // 2   0
  // 2   2
  // 2   4
  // let pagesize=2//每页的条数
  // let page=1//页数o
  let  {pagesize,page}=req.body
  // console.log(pagesize)
  // console.log(page)
  User.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  .then((data)=>{
    res.send({err:0,msg:'查询成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询错误',data:null})
  })

})


//民师院报修信息
Router.post('/repair',(req,res)=>{
  // Goods.find()查询所有
  // Goods.find({tyle:‘音乐’})//分类查询
  // Goods.find().limit(5).skip(5)//分页查询
  // 1页2条
  // 2   0
  // 2   2
  // 2   4
  // let pagesize=2//每页的条数
  // let page=1//页数o
  // let  data ={
  //    num:"D2624",
  //   type:"电器类 ",
  //   thing:"直饮水机",
  //   phone:"111111111",
  //   time:"2019年1月6日 15:40",
  //   stutas:"已处理",
  //   beizhu:"尽快来",
  //   jianyi:"等待确认验收"
  // }
         // Repair.insertMany(data)

  // console.log(pagesize)
  // console.log(page)
  Repair.find()
  // User.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  .then((data)=>{
    res.send({err:0,msg:'查询成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询错误',data:null})
  })

})

//邮箱通知报修详情
// let check={}
  //获取验证码
  Router.post("/sendEmail",(req,res)=>{
    console.log(req.body)
    let mail=req.body.mail
     let num=req.body.num;
    let type = req.body.type;
    let thing = req.body.thing;
    let phone = req.body.phone;
    let time = req.body.time;

  if (!mail) {return res.send('参数错误')}
   
    // for(var i=0;i<4;i++){
    //   code+=Math.floor(Math.random()*10)
    // }


    check[mail]={mail,num,type,thing}
    console.log(check[mail])
    //发送邮件是异步操作
    //state状态值
     email.sendMail(mail,num,type,thing,phone,time,(state)=>{
            if (state) {
              res.send({err:-1,msg:'发送验证码成功',data:data})
            }else{
               res.send({err:0,msg:'发送验证码不成功',data:null})
            }
          
      })

  })

//修改商品

/**
 * @api {post} /goods/updateGoods/ updateGoods
 * @apiName updateGoods
 * @apiGroup goods
 *
 * @apiParam {String} id  商品的主键id
 * @apiParam {String} name  商品名称
 * @apiParam {String} type 商品类型
 * @apiParam {String} desc 商品描述
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {Number} stock 商品余额
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/updateGoods',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let id=req.body.id;
  // let id="5be0f33a40bb68a84440f082"
  let {name,type,desc,price,imgpath,stock}=req.body
  Goods.update({_id:id},{name,type,desc,price,imgpath,stock})
  .then((data)=>{
  	res.send({err:0,msg:'修改成功',data:data})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'修改no成功',data:null})
  })

})
//删除商品

/**
 * @api {post} /goods/delGood/ delGood
 * @apiName delGood
 * @apiGroup goods
 *
 * @apiParam {String} id  要删除的商品的主键id
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/delGood',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let id=req.body.id;
  Goods.remove({_id:id})
  .then((data)=>{
  	res.send({err:0,msg:'删除成功',data:null})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'删除失败',data:null})
  })

})
//验证码的发送
  let check={}
  //获取验证码
  Router.post("/getCode",(req,res)=>{
    console.log(req.body)
    let mail=req.body.mail
  if (!mail) {return res.send('参数错误')}
    let code=""
    for(var i=0;i<4;i++){
      code+=Math.floor(Math.random()*10)
    }


    check[mail]=code
    // console.log(check[mail])
    //发送邮件是异步操作
    //state状态值
     email.sendMail(mail,code,(state)=>{
            if (state) {
              res.send({err:-1,msg:'发送验证码成功',data:data})
            }else{
               res.send({err:0,msg:'发送验证码不成功',data:null})
            }
          
      })

  })

  //验证码验证
  Router.post("/reg",(req,res)=>{
   let {ps,mail,code}=req.body
   console.log({ps,mail,code})
   console.log(check[mail])
   if (check[mail]==code) {
       //插入数据库
         User.insertMany({mail,ps})
         
       res.send('注册ok')

   }else{
      res.send('验证码错误')
   }

 })

  // 民师院登录用户信息插入
  Router.post("/Mlogin",(req,res)=>{
   let {ps,num}=req.body
   console.log({ps,num})
   if (num!==""&&ps!=="") {
       //插入数据库
         User.insertMany({num,ps})
         
       res.send('登录插入ok')

   }else{
      res.send('插入不成功错误')
   }

 })

  //登录信息验证，重复提示已经存在(民师院登录模块)
  Router.post('/isUsername',(req,res)=>{
  

 console.log(req.body.num);
 let num = req.body.num;
      User.findOne({num:{$regex:num}},function(err,data){
              
       if(data){
               res.send({err:1,msg:'存在',data:data})
             }else{
              res.send({err:0,msg:'不存在',data:null})
             }

})
       
        
})

  //报修模块插入数据
  Router.post("/addRepair",(req,res)=>{
   let {num,type,thing,phone,time,stutas,beizhu,jianyi}=req.body
   console.log({num,type,thing,phone,time,stutas,beizhu,jianyi})
   if (num!==""&&type!=="") {
       //插入数据库
         Repair.insertMany({num,type,thing,phone,time,stutas,beizhu,jianyi})
         
       res.send('添加插入ok')

   }else{
      res.send('插入不成功错误')
   }

 })


// m模糊查询 关键字查询
Router.post('/findGoodsByKw',(req,res)=>{
    let{name,desc}=req.body
   Goods.find({$or:[{name:{$regex:name}},{desc:{$regex:desc}}]})
  .then((data)=>{
    res.send({err:0,msg:'关键字查询成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'关键字查询失败',data:null})
  })

})



//页码总数
Router.post('/getZongshu',(req,res)=>{
  Goods.find()
  .then((data)=>{
      res.send(data)
  })
  .catch((err)=>{
    console.log(err);
  })
})

//验证用户名是否重复
 Router.post('/isUser',(req,res)=>{
  
 console.log(req.body.mail);
 let mail = req.body.mail;
      User.findOne({mail:{$regex:mail}},function(err,data){
              
       if(data){
               res.send({err:1,msg:'存在',data:data})
             }else{
              res.send({err:0,msg:'不存在',data:null})
             }


       
      })
       
        
})

 //价格排序
  var  pagesize=5;var page=1;
   Router.post('/paixu',(req,res)=>{
      Goods.find().sort({price:1}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
          // Goods.find()
      .then((data)=>{
    res.send({err:0,msg:'排序成功',data:data})
  })
  .catch((err)=>{
    console.log(err);
    res.send({err:-1,msg:'排序失败',data:null})


  })

   })
 


//价格降序
  Router.post('/jiangxu',(req,res)=>{
      Goods.find().sort({price:-1}).limit(5).skip(1)
      // Goods.find().sort({price:-1})
      .then((data)=>{
    res.send({err:0,msg:'降序成功',data:data})
  })
  .catch((err)=>{
    console.log(err);
    res.send({err:-1,msg:'降序失败',data:null})


  })

   })
// Router.post
module.exports=Router;