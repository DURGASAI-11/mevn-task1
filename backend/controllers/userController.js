const { User } = require('../models/userModel')

const allUsersFn = async (req, res) => {
  try {
    const allUsers = await User.find({})
    res.status(200).json({ data: allUsers })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const createUserFn = async (req, res) => {
  try {
    const { name, country, phone } = req.body
    console.log(req.body)
    const newUser = await User.create({
      name: name,
      country: country,
      phone: phone,
    })
    res.status(201).json({ data: newUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const updateUserFn = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ data: updatedUser })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const deleteUserFn = async (req, res) => {
  try {
    const { id } = req.params 
    await User.deleteOne({ _id: id })
    res.status(200).json({ data: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { allUsersFn, createUserFn, updateUserFn, deleteUserFn }
