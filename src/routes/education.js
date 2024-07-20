const express = require('express');

const blogsController = require('../controller/education');

const router = express.Router();

// router.get('/search', blogsController.getallsearch);
router.get('/', blogsController.geteducation);

router.post('/', blogsController.createNew);

router.get('/:id', blogsController.getbyid);

router.post('/update/:id', blogsController.update);

router.post('/delete/:id', blogsController.deleteeducation);

module.exports = router;