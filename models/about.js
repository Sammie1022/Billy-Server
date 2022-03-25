import mongoose from 'mongoose'

const aboutSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategories: [
    {
      subcategory: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
})

export default mongoose.model('About', aboutSchema)
