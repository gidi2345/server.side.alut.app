var url = require('url');
var nodemailer = require('nodemailer');
var verificationURL = 'http://localhost:3000/approved';

NODE_TLS_REJECT_UNAUTHORIZED='0'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gidon1smila@gmail.com',
    pass: 'SetupGlass11b'
  }
});

function sendMailRequest(tempUserEmail,tempUserId,tempUserFirstName,tempUserLastName)
{

var mailOptions = {
  from: tempUserEmail,
  to: 'gidi1smila@gmail.com',
  subject: 'New User Try To Register Alut App',
  text: 'Hey :)\n' + tempUserFirstName + tempUserLastName + 'with the id:' + tempUserId +'want to register to the app for approval press the link below\n'
    + verificationURL
};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports.sendMailRequest = sendMailRequest;