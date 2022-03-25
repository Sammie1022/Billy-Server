import About from '../models/about.js'

const getCategories = async (req, res) => {
  const { token } = req.body

  try {
    const result = await About.find()
    return res.json({ status: 'ok', value: result })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const addCategory = async (req, res) => {
  const { category, token } = req.body

  try {
    console.log(req.body)
    await About.create({ category })
    return res.json({ status: 'ok', value: 'Category added' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const addSubcategory = async (req, res) => {
  const { category, subcategory, description, token } = req.body

  try {
    console.log(req.body)

    await About.findOneAndUpdate(
      { category },
      { $push: { subcategories: { subcategory, description } } }
    )

    return res.json({ status: 'ok', value: 'Subcategory added' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const deleteSubcategory = async (req, res) => {
  const { category, subCategory, token } = req.body

  try {
    console.log(req.body)

    await About.findOneAndUpdate(
      { category },
      { $pull: { subcategories: { subcategory: subCategory } } }
    )

    return res.json({ status: 'ok', value: 'Subcategory deleted' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}

const editSubcategory = async (req, res) => {
  const { category, oldSubcategory, newSubcategory, description, token } =
    req.body

  try {
    await About.findOneAndUpdate(
      { category, 'subcategories.subcategory': oldSubcategory },
      {
        $set: {
          'subcategories.$.subcategory': newSubcategory,
          'subcategories.$.description': description,
        },
      }
    )

    console.log(req.body)
    return res.json({ status: 'ok', value: 'Subcategory edited' })
  } catch (error) {
    console.log(error)
    return res.json({ status: 'error', value: 'Error' })
  }
}
export {
  getCategories,
  addCategory,
  addSubcategory,
  deleteSubcategory,
  editSubcategory,
}
