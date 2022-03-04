import Buildings from "../models/buildings.js";

const getBuilding = async (req, res) => {
    const { buildingName } = req.body
    
    const result = Buildings.findOne({building_name: buildingName})
    const building = await result
    res.status(200).send(building)
}


export {getBuilding}