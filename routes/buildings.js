import express from 'express'
import { getBuilding } from '../methods/buildings.js'

const router = express.Router()

router.route('/getbuilding').post(getBuilding)

export default router