import mongoose from 'mongoose'

const buildingSchema = new mongoose.Schema({
  building_name: {
    type: String,
    require: true,
  },
  image_path: { type: String, require: true },
  floors: [
    {
      floor_number: {
        type: String,
      },
      facilities: [
        {
          facility_name: { type: String },
          facility_description: { type: String },
          facility_image_path: { type: String },
          facility_path_guide: { type: String },
        },
      ],
    },
  ],
})

export default mongoose.model('Buildings', buildingSchema)
