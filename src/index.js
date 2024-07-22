require('dotenv').config()

const PORT = process.env.port || 5000

const express = require('express');

const blogRoutes = require('./routes/blogs');

const educationRoutes = require('./routes/education');

const adminposRoutes = require('./routes/admin_pos');

const commentsRoutes = require('./routes/comments');

const cleaningservicesRoutes = require('./routes/cleaning_services');

const wastereportsRoutes = require('./routes/waste_reports');

const middlewareLogRequest = require('./middleware/logs');

const upload = require('./middleware/multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use('/assets', express.static('./public/images'));

app.use('/api/blogs', upload.single('image'), blogRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})
 app.use((err, req, res, next) => {
    res.json({
        message:err.message
    })
 })

 app.use('/api/education', upload.single('image'), educationRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})
 app.use((err, req, res, next) => {
    res.json({
        message:err.message
    })
 })

 app.use('/api/comments', upload.none(), commentsRoutes);

 app.use('/api/admin_pos', upload.none(), adminposRoutes);
 
 app.use('/api/cleaning_services', upload.none(), cleaningservicesRoutes);

app.use('/api/waste_reports', upload.single('image'), wastereportsRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})
 app.use((err, req, res, next) => {
    res.json({
        message:err.message
    })
 })

 app.listen(PORT, () =>{
    console.log(`Server berhasil di running di port ${PORT}`)
 })
