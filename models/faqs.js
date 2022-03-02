import mongoose from 'mongoose'


const faqSchema = new mongoose.Schema({
  office_name: { type: String, require: true },
  location: { type: String, require: true },
  office_hours: { type: String, require: true },
  office_email: { type: String, require: true },
  questions: {type: Array},
})

export default mongoose.model('Faq', faqSchema)