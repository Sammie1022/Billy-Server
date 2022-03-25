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

const addFacility = async (req, res) => {
  const {
    buildingName,
    floorNumber,
    facilityName,
    facilityDescription,
    facilityImage,
    facilityPathGuide,
    token,
  } = req.body

  try {
    console.log(req.body)

    await Buildings.findOneAndUpdate(
      { building_name: buildingName, 'floors.floor_number': floorNumber },
      {
        $push: {
          'floors.$.facilities': {
            facility_name: facilityName,
            facility_description: facilityDescription,
            facility_image_path: facilityImage,
            facility_path_guide: facilityPathGuide,
          },
        },
      }
    )
    return res.json({ status: 'ok', value: 'Facility added' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const deleteFacility = async (req, res) => {
  const { buildingName, floorNumber, facilityName, token } = req.body

  try {
    console.log(req.body)
    await Buildings.findOneAndUpdate(
      { building_name: buildingName, 'floors.floor_number': floorNumber },
      {
        $pull: {
          'floors.$.facilities': {
            facility_name: facilityName,
          },
        },
      }
    )

    return res.json({ status: 'ok', value: 'Facility deleted' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const editFacility = async (req, res) => {
  const {
    buildingName,
    floorNumber,
    oldFacilityName,
    newFacilityName,
    facilityDescription,
    facilityImage,
    facilityPathGuide,
    token,
  } = req.body

  try {
    await Buildings.findOneAndUpdate(
      {
        building_name: buildingName,
        floors: {
          $elemMatch: {
            floorNumber,
            'facilities.facility_name': oldFacilityName,
          },
        },
      },
      {
        $set: {
          'floors.$[outer].facilities.$[inner].facility_name': newFacilityName,
          'floors.$[outer].facilities.$[inner].facility_description':
            facilityDescription,
          'floors.$[outer].facilities.$[inner].facility_image_path':
            facilityImage,
          'floors.$[outer].facilities.$[inner].facility_path_guide':
            facilityPathGuide,
        },
      },
      {
        arrayFilters: [
          { 'outer.floor_number': floorNumber },
          { 'inner.facility_name': oldFacilityName },
        ],
      }
    )

    return res.json({ status: 'ok', value: 'Facility edited' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}
export { getBuilding, getBuildings, addFacility, deleteFacility, editFacility }
