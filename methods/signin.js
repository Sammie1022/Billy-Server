import User from '../models/user.js'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import sendMail from '../middleware/nodeMailer.js'
import generateCode from '../middleware/code.js'
import Code from '../models/code.js'

const signup = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    if (user) {
      return res.json({ status: 'error', value: 'Username already exists' })
    }

    const hashedPassword = await bcryptjs.hash(password, 10)

    await User.create({ username, password: hashedPassword })

    return res.json({ status: 'ok', value: 'User registered' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const signin = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.json({
        status: 'error',
        value: 'Invalid email address or password',
      })
    }

    if (await bcryptjs.compare(password, user.password)) {
      const token = jsonwebtoken.sign({ username: user.username }, 'test')

      return res.json({ status: 'ok', value: token })
    }

    return res.json({
      status: 'error',
      value: 'Invalid email address or password',
    })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}
const sendCode = async (req, res) => {
  try {
    const code = generateCode()

    await Code.create({ code })

    sendMail('sdactivitiesoffice1900@gmail.com', code)

    return res.json({ status: 'ok', value: 'Code sent' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const confirmCode = async (req, res) => {
  const { code } = req.body

  try {
    const latestCode = await Code.find({}).sort({ _id: -1 }).limit(1)

    if (latestCode[0].code === code) {
      return res.json({ status: 'ok', value: 'Valid code' })
    }
    return res.json({ status: 'error', value: 'Code invalid' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const resetPassword = async (req, res) => {
  const { password } = req.body
  const hashedPassword = await bcryptjs.hash(password, 10)
  try {
    await User.findOneAndUpdate(
      { username: 'sdactivitiesoffice1900@gmail.com' },
      { password: hashedPassword }
    )

    return res.json({ status: 'ok', value: 'Password changed' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

export { signup, signin, sendCode, confirmCode, resetPassword }
