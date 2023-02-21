const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Coaster = new Schema(
  {
    name: { type: String, required: true },
    height: { type: String, required: true },
    location: { type: String, required: true },
    length: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Coaster', Coaster)
