const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const originalname = file.originalname;

        cb(null, `${timestamp}-${originalname}`);
    }
});

const upload = multer({
    storage: storage,
    filefilter: function(req, file, cb){
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)){
            req.fileValidateionError = 'Hanya file foto yang diizinkan!';
            return cb(new Error('Hanya File Foto Yang Diizinkan!'), false);
        }
        cb(null,true);
    },
    
    limits: {
        filesize: 3 * 1000 * 1000 //3 MB
    },
});

module.exports = upload;