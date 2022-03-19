import express from 'express'
import { getBuilding, getBuildings } from '../methods/buildings.js'

const router = express.Router()

router.route('/getbuilding').post(getBuilding)

router.route('/getbuildings').post(getBuildings)

export default router
