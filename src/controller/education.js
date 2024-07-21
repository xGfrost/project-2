const educationModel = require('../models/education');

const createNew = async (req, res) =>{
    const {body, file} = req;
    const image = file.filename;

    try {
        await educationModel.createNew(body, image);
        body.image = 'http://localhost:4000/assets/' + image;
        res.status(201).json({
            message: 'success',
            data: body,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid input',
            data: body,
        })
    }
}

const geteducation = async (req, res) => {
    const { search } = req.query;
    try {
        if (search) {
            const rows = await educationModel.getallsearch(search);
            res.status(200).json({
                message: 'Success',
                data: rows,
            });
        } else {
            const [data] = await educationModel.getAll();
            res.status(200).json({
                message: 'Success',
                data: data,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: [],
        });
    }
};

// const getAll = async (req, res) => {
//     try {
//          const [data] = await educationModel.getAll();
//         res.status(200).json({
//             message: 'success',
//             data: data,
//         })
//     } catch (error) {
//         return res.status(400).json({
//             message: 'Invalid input',
//             data: data,
//         })
//     }
// }

const getbyid = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await educationModel.getbyid(id);
        res.status(200).json({
            message: 'success',
            data: data,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid Input',
            data: data,
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const {body, file} = req;
    const image = file.filename;
    try {
        await educationModel.update(id,body,image);
        body.image = 'http://localhost:4000/assets/' + image;
        res.status(200).json({
            message: 'Success',
            data:id,
            ...body
        })

    } catch (error) {
        return res.status(400).json({
            message: 'Blogs not found',
            data: body,
        })
    }
}

const deleteeducation = async (req, res) => {
    const {id} = req.params;
    try {
        await educationModel.deleteeducation(id);
        res.status(200).json({
            message: 'Success',
            data: null,
        })
    } catch (error) {
        return res.status(400).json({
            message: Error.message,
            data: null,
        })
    }
}

// const getallsearch = async(req, res) => {
//     const {q} = req.query;
//     try {
//         const rows = await educationModel.getallsearch(q);
//         res.status(200).json({
//             message: 'Success',
//             data: rows,
//         })
//     } catch (error) {
//         return res.status(400).json({
//             message: 'Blogs not found',
//             data: rows,
//         })
//     }
// }

module.exports ={
    createNew,
    getbyid,
    update,
    deleteeducation,
    geteducation,
}