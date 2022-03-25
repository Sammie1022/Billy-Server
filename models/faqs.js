import mongoose from 'mongoose'

const faqSchema = new mongoose.Schema({
  office_name: { type: String, required: true },
  location: { type: String, required: true },
  office_hours: { type: String, required: true },
  office_email: { type: String, required: true },
  questions: [
    {
      question: { type: String },
      answer: { type: String },
      image_path: { type: String },
    },
  ],
})

export default mongoose.model('Faqs', faqSchema)
