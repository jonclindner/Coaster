const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rides: [{ type: Schema.Types.ObjectId, ref: 'Coaster' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    picture: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
