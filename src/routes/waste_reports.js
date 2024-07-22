const express = require('express');

const wastereprotsController = require('../controller/waste_reports');

const router = express.Router();

router.get('/', wastereprotsController.getwastereports);

router.get('/:id', wastereprotsController.getbyid);

router.post('/', wastereprotsController.createNew);

router.post('/delete/:id', wastereprotsController.deleteid);

router.post('/update/:id', wastereprotsController.update);

module.exports = router;