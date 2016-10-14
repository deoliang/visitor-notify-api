const nodemailer = require('nodemailer')
const json = require('../config/config.json')
var smtpConfig, transporter, mailOptions

// const demo = function () {
//   setUpForGmail();
//   var data = {
//     to : {
//       name : "your name",
//       email : "your email"
//     },
//     subject : "put your subject here",
//     body : "<strong>put your message here</strong>"
//   }
//   buildEmail(data);
//   sendEmail()
// }

const setUpForGmail = function () {
  smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: json.senderEmail,
      pass: json.senderPassword
    }
  }
  transporter = nodemailer.createTransport(smtpConfig)
}

const buildEmail = function (emailHeader) {
  mailOptions = {
    from: '"' + json.senderName + '" <' + json.senderEmail +'>',
    to: '"' + emailHeader.to.name + '" <' + emailHeader.to.email +'>',
    subject: emailHeader.subject,
    html: emailHeader.body
  }
}

const sendEmail = function () {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) throw error
    return info
  })
}

module.exports = {
  setUpForGmail : setUpForGmail,
  buildEmail : buildEmail,
  sendEmail : sendEmail
}