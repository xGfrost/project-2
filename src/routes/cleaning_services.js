const express = require('express');

const cleaningservicesController = require('../controller/cleaning_services');

const router = express.Router();

router.get('/', cleaningservicesController.getcleaningservices);

router.get('/:id', cleaningservicesController.getbyid );

router.post('/', cleaningservicesController.createNew);

router.post('/update/:id', cleaningservicesController.update);

router.post('/delete/:id', cleaningservicesController.deletecleaningservices)

module.exports = router;