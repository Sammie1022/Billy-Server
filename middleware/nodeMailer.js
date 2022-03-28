import nodemailer from 'nodemailer'

const sendMail = async (emailAddress, code) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: 'askbilly2022@gmail.com',
        pass: 'askbilly2022***',
      },
    })

    let info = await transporter.sendMail({
      from: 'askbilly2022@gmail.com',
      to: emailAddress,
      subject: 'Request change password',
      text: `The code is ' ${code}`,
      html: `<p>The code is ${code}</p>`,
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  } catch (error) {
    console.log(error)
  }
}

export default sendMail
