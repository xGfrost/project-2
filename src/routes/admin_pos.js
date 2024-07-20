const express = require('express');

const adminposController = require('../controller/admin_pos');

const router = express.Router();

router.get('/', adminposController.getadminpos);

router.get('/:id', adminposController.getbyid);

router.post('/', adminposController.createNew);

router.post('/update/:id', adminposController.update);

router.post('/delete/:id', adminposController.deleteadminpos);

module.exports = router;