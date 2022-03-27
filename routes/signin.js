import express from 'express'
import { forgotPassword, signin, signup } from '../methods/signin.js'

const router = express.Router()

router.route('/signin').post(signin)

router.route('/signup').post(signup)

router.route('/forgotpassword').post(forgotPassword)

export default router
