const {Router} = require('express')
const passport = require('passport')
const googleController = require('../controllers/google.controller')
require('../googleStrategy');

const router = Router()

// Auth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }), googleController.success
);

module.exports = router