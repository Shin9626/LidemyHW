const todoModel = require('../models/todoModel')

const todoController = {

    get: (req, res) => {
        todoModel.get((err, results) => {
            if (err) return console.log(err);
            console.log(results)
            res.render('index', { todos: results })
        })
    },

    add: (req, res) => {
    },
}

module.exports = todoController;