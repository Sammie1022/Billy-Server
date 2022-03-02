// const express = require('express')
// const { getQuestionsFromOffice } = require('../methods/faqs')
import express from 'express'
import { getQuestionsFromOffice } from '../methods/Faqs.js'
const router = express.Router()

router.route('/getquestionsfromoffice').post(getQuestionsFromOffice)

export default router
