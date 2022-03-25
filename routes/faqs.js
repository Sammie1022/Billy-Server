// const express = require('express')
// const { getQuestionsFromOffice } = require('../methods/faqs')
import express from 'express'
import {
  addOffice,
  addQuestion,
  deleteOffice,
  deleteQuestion,
  editOffice,
  editQuestion,
  getOffices,
  getQuestionsFromOffice,
} from '../methods/faqs.js'
const router = express.Router()

router.route('/getquestionsfromoffice').post(getQuestionsFromOffice)
router.route('/getoffices').post(getOffices)
router.route('/editoffice').post(editOffice)
router.route('/addoffice').post(addOffice)
router.route('/deleteoffice').post(deleteOffice)
router.route('/addquestion').post(addQuestion)
router.route('/deletequestion').post(deleteQuestion)
router.route('/editquestion').post(editQuestion)

export default router
