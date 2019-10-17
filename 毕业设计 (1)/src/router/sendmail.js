
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user:'847788466@qq.com', // 发送方的邮箱
        pass: 'idohorvxunrhbcfg' // smtp 的授权码
    }
});


function sendMail(mail,num,type,thing,phone,time,call){
    // 发送的配置项
    let mailOptions = {
        from: '"Fred Foo 👻" <847788466@qq.com>', // 发送方
        to: '847788466@qq.com',// 接收方
        subject: '报修信息提示', // 标题
        text: 'Hello world?', // 文本内容
        html: `<h3>您有一条报修信息，民师院${num}室:报修类型：${type},报修设备：${thing},联系电话：${phone},请注意查收及时处理，报修时间为${time}</h3>`//页面内容
    };

   //发送函数
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

}

module.exports={sendMail}
