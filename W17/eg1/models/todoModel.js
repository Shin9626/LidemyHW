const db = require('../db')

const todoModel = {
    get: (id, callback) => {
        db.query(
            'SELECT * FROM todos WHERE id = ?', [id], (err, results) => {
                if (err) return callback(err);
                callback(null, results)
            });
    },

    add: (content, callback) => {
        db.query(
            'INSERT INTO todos(content) values(?)', [content],
            (err, results) => {
                if (err) return callback(err);
                callback(null, results);
            }
        )
    }
}

module.exports = todoModel;