const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/coaster', controllers.createCoaster)

router.get('/coaster', controllers.getAllCoaster)

router.get('/coaster/:id', controllers.getCoasterById)
router.put('/coaster/:id', controllers.updateCoaster)
router.delete('/coaster/:id', controllers.deleteCoaster)

router.post('/coaster/:id/review', controllers.createReview)

router.delete('/review/:id', controllers.deleteReview)

router.post('/coaster/:id/user', controllers.createUser)
router.delete('/user/:id', controllers.deleteUser)
module.exports = router
