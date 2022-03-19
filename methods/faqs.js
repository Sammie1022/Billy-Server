import Faqs from '../models/faqs.js'
import User from '../models/user.js'

const getQuestionsFromOffice = async (req, res) => {
  const { officeName } = req.body

  const result = Faqs.findOne({ office_name: officeName }, { _id: false })
  const faq = await result

  res.status(200).send(faq)
}

const addQuestionToOffice = async (req, res) => {
  const { officeName } = req.body

  res.status(200).send('')
}

const getOffices = async (req, res) => {
  const { token } = req.body

  try {
    const offices = await Faqs.find()

    return res.json({ status: 'ok', value: offices })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const editOffice = async (req, res) => {
  const { officeName, location, officeHours, officeEmail, token } = req.body

  try {
    console.log(req.body)
    await Faqs.findOneAndUpdate(
      { office_name: officeName },
      {
        office_name: officeName,
        location,
        office_hours: officeHours,
        office_email: officeEmail,
      }
    )
    return res.json({ status: 'ok', value: 'Office updated' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const addOffice = async (req, res) => {
  const { officeName, location, officeHours, officeEmail, token } = req.body

  try {
    const existing = await Faqs.find({ office_name: officeName })
    console.log(existing.length)
    if (existing.length) {
      return res.json({ status: 'error', value: 'Office already exists' })
    }

    await Faqs.create({
      office_name: officeName,
      location,
      office_hours: officeHours,
      office_email: officeEmail,
    })
    return res.json({ status: 'ok', value: 'Office added' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const deleteOffice = async (req, res) => {
  const { officeName, token } = req.body

  try {
    await Faqs.findOneAndDelete({ office_name: officeName })

    return res.json({ status: 'ok', value: 'Office deleted' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}
export {
  getQuestionsFromOffice,
  getOffices,
  editOffice,
  addOffice,
  deleteOffice,
}
