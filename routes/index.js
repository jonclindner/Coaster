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
router.get('/review/:id', controllers.getReviewById)
router.put('/review/:id', controllers.updateReview)

router.post('/user', controllers.createUser)
router.delete('/user/:id', controllers.deleteUser)

router.post('/login', controllers.loginUser)
module.exports = router
