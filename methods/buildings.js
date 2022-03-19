import Buildings from '../models/buildings.js'

const getBuilding = async (req, res) => {
  const { buildingName } = req.body

  const result = Buildings.findOne({ building_name: buildingName })
  const building = await result
  res.status(200).send(building)
}

const getBuildings = async (req, res) => {
  const { token } = req.body

  try {
    const buildings = await Buildings.find()

    return res.json({ status: 'ok', value: buildings })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

export { getBuilding, getBuildings }
