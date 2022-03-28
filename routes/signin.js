import express from 'express'
import {
  confirmCode,
  resetPassword,
  sendCode,
  signin,
  signup,
} from '../methods/signin.js'

const router = express.Router()

router.route('/signin').post(signin)

router.route('/signup').post(signup)

router.route('/sendcode').post(sendCode)

router.route('/confirmcode').post(confirmCode)

router.route('/resetpassword').post(resetPassword)

export default router
