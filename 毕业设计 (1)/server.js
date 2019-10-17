  const express=require('express');
  const app=express();
  const bodyParser=require('body-parser')
  const path=require('path')

  const db=require('./src/mongo/mongoose.js')
  //连接数据库
  
  
  app.use(bodyParser.urlencoded({ extended: false }))

  // app.use(express.static(path.join(__dirname,'./public')))
  app.use(express.static(path.join(__dirname,'./admin')))
  //将项目user运行在端口3000
  //路由
  // const adminRouter=require('./src/router/admin.js')
  // const uploadRouter=require('./src/router/upload.js')
  const goodsRouter=require('./src/router/goods.js')

  // app.use('/admin',adminRouter)
  // app.use('/upload',uploadRouter)
   app.use('/goods',goodsRouter)


const proxy = require('http-proxy-middleware')

   
app.all('*', function (req, res, next) {
//响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //允许请求资源的方式
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
     // //跨域请求CORS中的预请求
if(req.method == "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});



app.use('/dmapi', proxy({
  "target": "https://m.moretickets.com",
  "changeOrigin": true,
  "pathRewrite": {
    '^/dmapi': '/'
  }
})),

 app.listen(3000,()=>{
    console.log('server start in port'+3000);
})


//代码功能：路由  入口文件b