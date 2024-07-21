const adminposModel = require('../models/admin_pos');

const getadminpos = async (req, res) => {
    const {search} = req.query;
    try{
        if (search) {
            const rows = await adminposModel.getallsearch(search);
            res.status(200).json({
                message: 'Success',
                data:rows,
            });
        }else{
            const [data] = await adminposModel.getAll();
            res.status(200).json({
                message: 'Success',
                data: data,
            });
        }
    } catch (error){
        res.status(400).json({
            message: error.message,
            data: [],
        })
    }
}

// const getAll = async (req, res) => {
//     try {
//          const [data] = await adminposModel.getAll();
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
        const data = await adminposModel.getbyid(id);
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

const createNew = async (req, res) => {
    const {body} = req;

    try {
        await adminposModel.createNew(body);
        res.status(201).json({
            message:'Success',
            data: body,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid input',
            data: body,
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await adminposModel.update(id, body);
        res.status(200).json({
            message: 'Success',
            data:id,
            ...body
        })

    } catch (error) {
        return res.status(400).json({
            message: 'Invalid Input',
            data: body,
        })
    }
}

const deleteadminpos = async (req, res) => {
    const {id} = req.params;
    try {
        await adminposModel.deleteadminpos(id);
        res.status(200).json({
            message: 'Success',
            data: null,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: null,
        })
    }
}

module.exports = {
    createNew,
    update,
    deleteadminpos,
    getbyid,
    getadminpos,

}