import express from 'express'
import {
  addCategory,
  addSubcategory,
  deleteSubcategory,
  editSubcategory,
  getCategories,
} from '../methods/about.js'

const router = express.Router()

router.route('/getcategories').post(getCategories)

router.route('/addcategory').post(addCategory)

router.route('/addsubcategory').post(addSubcategory)

router.route('/deletesubcategory').post(deleteSubcategory)

router.route('/editsubcategory').post(editSubcategory)

export default router
