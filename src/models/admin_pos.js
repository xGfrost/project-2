const dbPool = require('../config/database');
const cuid = require('cuid');

const getAll = () => {
    const SQLQuery = 'SELECT * FROM admin_pos';

    return dbPool.execute(SQLQuery);
}

const getbyid = (id) => {
    const SQLQuery = 'SELECT * FROM admin_pos WHERE id = ?';
    return dbPool.execute(SQLQuery, [id])
    .then(([results, fields]) => results);
}

const createNew = (body) => {
    const id = cuid();
    const SQLQuery = `INSERT INTO admin_pos (id,name, description, location)
                        VALUES (? ,?, ?, ?)`;

                        return dbPool.execute(SQLQuery, [id,body.name, body.description, body.location]);
}

const update = (id, body) => {
    const SQLQuery = `UPDATE admin_pos
                      SET name = ?, description = ?, location = ?
                      WHERE id = ?`;

    return dbPool.execute(SQLQuery, [body.name, body.description,body.location, id]);
};

const deleteadminpos = (id) => {
    const SQLQuery = `DELETE FROM admin_pos WHERE id = ?`;

    return dbPool.execute(SQLQuery, [id]);
}

const getallsearch = (q) => {
    const SQLQuery = 'SELECT * FROM admin_pos WHERE name LIKE ?';
    const searchParam = `%${q}%`;
    return dbPool.execute(SQLQuery, [searchParam])
    .then (([results, fields]) => results);
}

module.exports ={
    getAll,
    createNew,
    update,
    deleteadminpos,
    getbyid,
    getallsearch,
}