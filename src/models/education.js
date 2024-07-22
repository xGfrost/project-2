const dbPool = require('../config/database');
const cuid = require('cuid');

const createNew = (body, image) => {
    const id = cuid(); // Generate the unique ID using cuid
    const SQLQuery = `INSERT INTO blogs (id, title, description, image, status, type, video_url)
                      VALUES ('${id}', '${body.title}', '${body.description}', '${image}', ${body.status}, '${body.type}', '${body.video_url}')`;

    
    
                      return dbPool.execute(SQLQuery);
}

const getAll = () => {
    const SQLQuery = `SELECT * FROM blogs WHERE type = 'EDUCATION' ` ;

    return dbPool.execute(SQLQuery);
}

const getbyid = (id) => {
    const SQLQuery = 'SELECT * FROM blogs WHERE id = ?';
    return dbPool.execute(SQLQuery, [id])
    .then(([results, fields]) => results);
}

const update = (id, body, image) => {
    const SQLQuery = `UPDATE blogs
                      SET title = ?, description = ?, image = ?, status = ?, video_url = ?
                      WHERE id = ?`;

    return dbPool.execute(SQLQuery, [body.title, body.description, image, body.status, body.video_url, id]);
};

const deleteeducation = (id) => {
    const SQLQuery = `DELETE FROM blogs WHERE id = ?`;

    return dbPool.execute(SQLQuery, [id]);
}

const getallsearch = (search) => {
    const SQLQuery = `SELECT * FROM blogs WHERE type = 'EDUCATION' AND title LIKE ?`;
    const searchParam = `%${search}%`;
    return dbPool.execute(SQLQuery, [searchParam])
        .then(([results, fields]) => results);
}

module.exports = {
    createNew,
    getAll,
    getbyid,
    update,
    deleteeducation,
    getallsearch,

}