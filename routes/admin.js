const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-employee', adminController.getAddEmployee);



//admin/add-product => POST
router.post('/add-employee', adminController.postAddEmployee);

router.get('/edit-employee/:employeeId', adminController.getEditEmployee);

router.post('/edit-employee', adminController.postEditEmployee);

router.post('/delete-product', adminController.postDeleteEmployee);




module.exports = router;