const path = require('path');

const express = require('express');

const customerController = require('../controllers/customer');

const router = express.Router();

// // /admin/products => GET
router.get('/', customerController.getIndex);





module.exports = router;