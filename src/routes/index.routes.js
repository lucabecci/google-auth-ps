const {Router} = require('express')
const isLoggedIn = require('../middlewares/logged')
const indexController = require('../controllers/index.controller')
const router = Router()


router.get('/', indexController.home)
router.get('/failed', indexController.failed)

router.get('/welcome', isLoggedIn, indexController.welcome)

router.get('/logout', indexController.logout)

module.exports = router