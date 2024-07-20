const express = require('express');

const blogsController = require('../controller/blogs');

const router = express.Router();

// router.get('/search', blogsController.getallsearch);
router.get('/', blogsController.getBlogs);

router.post('/', blogsController.createNew);

router.get('/:id', blogsController.getbyid);

router.post('/update/:id', blogsController.update);

router.post('/delete/:id', blogsController.deleteblogs);

module.exports = router;