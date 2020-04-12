const express = require('express');
const {courseController} = require('../controllers/index');
const router = express.Router();

// user auth
router.get('/api/validate', courseController.validate);
router.get('/api/pool', courseController.pool);


module.exports = router;