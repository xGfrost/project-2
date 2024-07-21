const cleaningserviceModel = require('../models/cleaning_services');

const getcleaningservices = async(req, res) => {
    const {search} = req.query;
    try {
        if(search){
            const rows = await cleaningserviceModel.getallsearch(search);
            const formattedResults = rows.map(item => ({
                id: item.csID,
                user_id: item.user_id,
                description: item.description,
                address: item.address,
                customer_contact: item.customer_contact,
                cleaning_date: item.cleaning_date,
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
                data: formattedResults
            })

        }else{
            const [data] = await cleaningserviceModel.getAll();

            const formattedResults = data.map(item => ({
                id: item.csID,
                user_id: item.user_id,
                description: item.description,
                address: item.address,
                customer_contact: item.customer_contact,
                cleaning_date: item.cleaning_date,
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
                data: formattedResults
            })
        }
       
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data:[],
        })
    }
}

const getbyid = async(req, res) => {
    const {id} = req.params;
    try {
        const [data] = await cleaningserviceModel.getbyid(id);

        const formattedResults = data.map(item => ({
            id: item.csID,
            user_id: item.user_id,
            description: item.description,
            address: item.address,
            customer_contact: item.customer_contact,
            cleaning_date: item.cleaning_date,
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
            data: formattedResults
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data:[],
        })
    }
}

const createNew = async(req, res)=> {
    const {body} = req;
    try {
        await cleaningserviceModel.createNew(body);
        res.status(201).json({
            message:'Success',
            data:body,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: body,
        })
    }
}

const update = async(req, res)=> {
    const {id} = req.params;
    const {body} = req;
    try {
        await cleaningserviceModel.update(id, body);
        res.status(200).json({
            message: 'Success',
            data: body

        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

const deletecleaningservices = async (req, res) => {
    const {id} = req.params;
    try {
        await cleaningserviceModel.deletecleaningservices(id);
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
    getcleaningservices,
    getbyid,
    createNew,
    update, 
    deletecleaningservices,
}