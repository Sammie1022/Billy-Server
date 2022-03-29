import mongoose from 'mongoose'

const CodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
})

export default mongoose.model('Code', CodeSchema)
