import User from '../models/user.js'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

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

const forgotPassword = async (req, res) => {}

export { signup, signin, forgotPassword }
