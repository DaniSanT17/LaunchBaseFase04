const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "87b655607311d2",
      pass: "ce7dce61053bb4"
    }
  });
