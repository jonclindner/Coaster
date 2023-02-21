const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rides: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
