// import express and Router()
const express = require('express');
const router = express.Router();

// import controller
const indexController = require('../controllers/index');

//define routes
router.get('/', indexController.welcome);

//export router
module.exports = router;