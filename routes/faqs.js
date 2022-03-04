// const express = require('express')
// const { getQuestionsFromOffice } = require('../methods/faqs')
import express from 'express'
import { getQuestionsFromOffice, addQuestionToOffice } from '../methods/faqs.js'
const router = express.Router()

router.route('/getquestionsfromoffice').post(getQuestionsFromOffice)
router.route('/addquestiontooffice').post(addQuestionToOffice)
export default router
