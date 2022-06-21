const db = require('../db')

const todoModel = {
    get: (callback) => {
        db.query(
            'SELECT * FROM todos', (err, results) => {
                if (err) return callback(err);
                callback(null, results)
        });
    },

    add: (content, callback) => {
    }
}

module.exports = todoModel;