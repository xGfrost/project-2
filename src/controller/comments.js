const commentModel = require('../models/comments');

const createNew = async(req, res) => {
    const {body} = req;
    try {
        await commentModel.createNew(body);
        res.status(201).json({
            message: 'Success',
            data: body,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid input',
            data: body,
        })
    }
}

module.exports = {
    createNew,
}