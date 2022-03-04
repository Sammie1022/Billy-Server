import Faqs from '../models/faqs.js'
import User from '../models/user.js'

const getQuestionsFromOffice = async (req, res) => {
  const { officeName } = req.body

  const result = Faqs.findOne({ office_name: officeName }, {'_id': false})
  const faq = await result

  res.status(200).send( faq )

}

const addQuestionToOffice = async (req, res) => {
  const { officeName } = req.body
  
  res.status(200).send('')
}


export { getQuestionsFromOffice,addQuestionToOffice }
