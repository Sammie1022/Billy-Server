import express from 'express'
import {
  addFacility,
  deleteFacility,
  editFacility,
  getBuilding,
  getBuildings,
} from '../methods/buildings.js'

const router = express.Router()

router.route('/getbuilding').post(getBuilding)

router.route('/getbuildings').post(getBuildings)

router.route('/addfacility').post(addFacility)

router.route('/deletefacility').post(deleteFacility)

router.route('/editfacility').post(editFacility)

export default router
