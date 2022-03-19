// const express = require('express')
// const { getQuestionsFromOffice } = require('../methods/faqs')
import express from 'express'
import {
  addOffice,
  deleteOffice,
  editOffice,
  getOffices,
  getQuestionsFromOffice,
} from '../methods/faqs.js'
const router = express.Router()

router.route('/getquestionsfromoffice').post(getQuestionsFromOffice)
router.route('/getoffices').post(getOffices)
router.route('/editoffice').post(editOffice)
router.route('/addoffice').post(addOffice)
router.route('/deleteoffice').post(deleteOffice)

export default router
