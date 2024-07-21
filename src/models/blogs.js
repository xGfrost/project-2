const dbPool = require('../config/database');
const cuid = require('cuid');

const createNew = (body, image) => {
    const id = cuid(); // Generate the unique ID using cuid
    const SQLQuery = `INSERT INTO blogs (id, title, description, image, status, type, video_url)
                      VALUES ('${id}', '${body.title}', '${body.description}', '${image}', ${body.status}, '${body.type}', '${body.video_url}')`;

    
    
                      return dbPool.execute(SQLQuery);
}

const getAll = () => {
    const SQLQuery = 'SELECT * FROM blogs ';

    return dbPool.execute(SQLQuery);
}

const getbyid = (id) => {
    const SQLQuery = `SELECT
                        blogs.id AS blogID, 
                        blogs.title, 
                        blogs.description AS description ,
                        blogs.image AS image, 
                        blogs.status AS status, 
                        blogs.type AS type, 
                        blogs.video_url AS video_url,
                        comments.id AS commentID, 
                        comments.user_id AS user_id, 
                        comments.blog_id AS blog_id, 
                        comments.content AS content,
                        users.id AS userID, 
                        users.name AS name,
                        users.email AS email, 
                        users.photo_url AS photo_url
                        FROM
                            blogs
                            LEFT JOIN 
                                comments
                                ON
                                blogs.id = comments.blog_id
                                LEFT JOIN
                                users
                                ON
                                comments.user_id = users.id
                                WHERE 
                                blogs.id = ?
                                 `;
    return dbPool.execute(SQLQuery, [id]);
}

const update = (id, body, image) => {
    const SQLQuery = `UPDATE blogs
                      SET title = ?, description = ?, image = ?, status = ?, video_url = ?
                      WHERE id = ?`;

    return dbPool.execute(SQLQuery, [body.title, body.description, image, body.status, body.video_url, id]);
};

const deleteblogs = (id) => {
    const SQLQuery = `DELETE FROM blogs WHERE id = ?`;

    return dbPool.execute(SQLQuery, [id]);
}

const getallsearch = (search) => {
    const SQLQuery = 'SELECT * FROM blogs WHERE title LIKE ?';
    const searchParam = `%${search}%`;
    return dbPool.execute(SQLQuery, [searchParam])
    .then(([results, fields]) => results);
}


module.exports = {
    createNew,
    getAll,
    getbyid,
    update,
    deleteblogs,
    getallsearch,

}