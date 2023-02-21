const Coaster = require('../models/coaster')
const Reviews = require('../models/reviews')
const User = require('../models/user')

const createCoaster = async (req, res) => {
  try {
    const coaster = await new Coaster(req.body)
    await coaster.save()
    return res.status(201).json({
      coaster
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCoaster = async (req, res) => {
  try {
    const coaster = await Coaster.find()
    return res.status(200).json({ coaster })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCoasterById = async (req, res) => {
  try {
    const { id } = req.params
    const coaster = await Coaster.findById(id)
    if (coaster) {
      return res.status(200).json({ coaster })
    }
    return res.status(404).send('Coaster with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCoaster = async (req, res) => {
  try {
    const coaster = await Coaster.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(coaster)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCoaster = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Coaster.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      return res.status(200).send('Coaster deleted')
    }
    throw new Error('Coaster not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Reviews(req.body)
    await review.save()
    const coaster = await Coaster.findById(req.params.id)
    coaster.reviews.push(review._id)
    await coaster.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Reviews.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      return res.status(200).send('Review is deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCoaster,
  getAllCoaster,
  getCoasterById,
  updateCoaster,
  deleteCoaster,
  createReview,
  deleteReview,
  createUser,
  deleteUser
}
