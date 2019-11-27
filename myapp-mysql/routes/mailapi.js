const nodemailer = require('nodemailer');

function mymail(userDetails,cb)
{
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'phpbatch34@gmail.com',
    pass: '123@@123'
  }
});

const mailOptions = {
  from: 'phpbatch34@gmail.com',
  to: 'phpbatch34@gmail.com',
  subject: 'Bidding Web Solution Verification Mail',
  html: "<h1>Welcome to Bidding Web Solution</h1><p>you have successfully registered on application, your login credentials</p><h3>Username : "+userDetails.email+"</h3><h3>Password : "+userDetails.password+" </h3><p>Click on the link below to verify your account</p><br> http://localhost:3000/verifyaccount?email="+userDetails.email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    cb()
  }
}); 
}


module.exports=mymail
