const db = require('../db')
const Coaster = require('../models/coaster')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const coaster = [
    {
      name: 'VelociCoaster',
      height: '155 ft',
      location: `Jurassic Park in Universal's Islands of Adventure - Orlando, Florida`,
      length: '4,700 ft',
      time: '2 minutes',
      image:
        'https://www.tripsavvy.com/thmb/9X5xlI-zgeiIRUGbaP2Qk7WnHQs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JurassicWorldVelociCoasterUniversalOrlando-b495a4606df54b60898fea75b293af34.jpeg',
      video: ' '
    },
    {
      name: 'Goliath',
      height: '165 ft',
      location: 'Six Flags Great America - Gurnee, Illinois',
      length: '3,100 ft',
      time: '3 minutes',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/23/Goliath_at_Six_Flags_Magic_Mountain_%28first_drop%29.jpg',
      video: ' '
    },
    {
      name: 'Maverick',
      height: '235 ft',
      location: 'Cedar Point - ',
      length: '4,500 ft',
      time: '3 minutes',
      image:
        'https://assets3.thrillist.com/v1/image/2674042/1584x1054/crop;webp=auto;jpeg_quality=60.jpg',
      video: ' '
    }
  ]

  await Coaster.insertMany(coaster)
  console.log('Created some Roller Coasters!')
}
const run = async () => {
  await main()
  db.close()
}

run()
