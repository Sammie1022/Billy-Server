import Faqs from '../models/faqs.js'
import User from '../models/user.js'
const getQuestionsFromOffice = async (req, res) => {
  const { officeName } = req.body

  const result = Faqs.findOne({ office_name: 'ADMISSIONS' })
  const faq = await result

  res.status(200).send({ value: faq })

  // const result = User.findOne({ office_name: 'SDAO' })
  // const user = await result

  // res.status(200).send({ value: user })
}

const getUser = async (req, res) => {
  const result = User.findOne({ name: 'testuser' })
  const user = await result

  res.status(200).send({ value: user })
}

export { getQuestionsFromOffice }
