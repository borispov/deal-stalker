const nodemailer = require("nodemailer");


module.exports = (async function sendMail(author, recipient, title, body ) {

  let account = await nodemailer.createTestAccount()
  
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    auth: {
      user: "boris.povolotsky",
      pass: "310arzab"
    }
  })


  let mailOptions = {
    from: author || 'boris.povolotsky@yandex.com',
    to: recipient || "Boris Povolotsky boristofu@gmail.com",
    subject: title || "Price Change Notif! ✔",
    text: body || "Hello, this is notification from Deal-Stalker in regards to a product you follow. There has been a decrease in the price. We do not know the significance of the decrease.",
  }

  let info = await transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err)
    else console.log(`Mail Sent: ${info.response}`)
  })
})