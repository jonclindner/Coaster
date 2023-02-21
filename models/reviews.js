const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    user: { type: String, required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
