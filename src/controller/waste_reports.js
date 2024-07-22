const wastereportsModel = require('../models/waste_reports');

const createNew = async (req, res) => {
    const {body, file} = req;
    const image = file.filename;

    try {
        await wastereportsModel.createNew(body, image);
        body.image = 'http://localhost:4000/assets/' + image;
        res.status(201).json({
            message: 'Success',
            data: body,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: body,
        })
    }
}

const deleteid = async(req, res) => {
    const {id} = req.params;
    try {
        await wastereportsModel.deleteid(id);
        res.status(200).json({
            message:'Success',
            data:null,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: null,
        })
    }
}

const getwastereports = async(req, res) =>{
    const {search}= req.query;
    try {
        if(search){
            const rows = await wastereportsModel.getallsearch(search);
            const formattedResults = rows.map(item => ({
                id: item.waste_reportsId,
            user_id: item.user_id,
            description: item.description,
            image: item.description,
            image: item.image,
            location: item.location,
            point: item.point,
            coin: item.coin,
            status: item.status,
            created_at: item.created_at,
            updated_at: item.updated_at,
            user: {
                id: item.user_id,
                name: item.name,
                email: item.email,
                photo_url: item.photo_url,
            }
            }));

            res.status(200).json({
                message: 'Success',
                data: formattedResults,
            })

        }else{
            const [data] = await wastereportsModel.getAll();

        const formattedResults = data.map(item => ({
            id: item.waste_reportsId,
            user_id: item.user_id,
            description: item.description,
            image: item.description,
            image: item.image,
            location: item.location,
            point: item.point,
            coin: item.coin,
            status: item.status,
            created_at: item.created_at,
            updated_at: item.updated_at,
            user: {
                id: item.user_id,
                name: item.name,
                email: item.email,
                photo_url: item.photo_url,
            }
            
        }));

        res.status(200).json({
            message: 'Success',
            data: formattedResults,
        })
        }
        

    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: null,
        })
    }
}

const getbyid = async(req, res) => {
    const {id} = req.params;
    try {
        const [data] = await wastereportsModel.getbyid(id);

        const formattedResults = data.map(item => ({
            id: item.waste_reportsId,
            user_id: item.user_id,
            description: item.description,
            image: item.description,
            image: item.image,
            location: item.location,
            point: item.point,
            coin: item.coin,
            status: item.status,
            created_at: item.created_at,
            updated_at: item.updated_at,
            user: {
                id: item.user_id,
                name: item.name,
                email: item.email,
                photo_url: item.photo_url,
            }
        }));

        res.status(200).json({
            message: 'Success',
            data: formattedResults,
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            data:[],
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await wastereportsModel.update(body, id);
        res.json({
            message: 'UPDATE waste reports success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

module.exports = {
    createNew,
    deleteid,
    getwastereports,
    getbyid,
    update,
}