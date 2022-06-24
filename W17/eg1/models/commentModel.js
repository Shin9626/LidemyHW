const db = require('../db')

const commentModel = {
    add: (username, content, callback) => {
        db.query(
            'INSERT INTO comments(username, content) VALUES(?, ?)',
            [username, content],
            (err, results) => {
                if (err) return callback(err);
                callback(null)
            });
    },

    getAll: (callback) => {
        db.query(`
            SELECT U.username, U.nickname, C.content, C.created_at, C.id
            FROM comments AS C
            LEFT JOIN users AS U on U.username = C.username
            ORDER BY C.created_at DESC
            `,
            (err, results) => {
                if (err) {
                    return callback(err);
                }
                callback(null, results)
            })
    },

    delete: (id, username, callback) => {
        db.query(
            'DELETE FROM comments WHERE id = ? AND username = ?',
            [id, username],
            (err, results) => {
                if (err) {
                    return callback(err);
                }
                callback(null)
            })
    },

    get: (id, username, callback) => {
        db.query(
            `SELECT C.content, C.id FROM comments AS C
            LEFT JOIN users AS U on U.username = C.username
            WHERE C.id = ? AND U.username = ?`,
            [id, username],
            (err, results) => {
                if (err) {
                    return callback(err);
                }
                callback(null, results[0])
            })
    },

    update: (id, username, content, callback) => {
        db.query(
            'UPDATE comments SET content=? WHERE id = ? AND username = ?',
            [content, id, username],
            (err) => {
                if (err) {
                    return callback(err);
                }
                callback(null)
            })
    },

}

module.exports = commentModel;