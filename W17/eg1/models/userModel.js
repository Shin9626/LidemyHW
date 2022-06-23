const db = require('../db')

const userModel = {
    get: (username, callback) => {
        db.query(
            'SELECT * FROM users WHERE username = ?', [username], (err, results) => {
                if (err) return callback(err);
                callback(null, results[0])
        });
    },

    add: (user, callback) => {
        db.query(
            'INSERT INTO users(username, password, nickname) values(?, ?, ?)',
            [user.username, user.password, user.nickname]
            , (err, results) => {
                if (err) return callback(err);
                callback(null)
            }
        );
    }
}

module.exports = userModel;