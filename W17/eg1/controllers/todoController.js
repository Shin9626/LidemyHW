const todoModel = require('../models/todoModel')

const todoController = {

    add: (req, res) => {
        const content = req.body.data;
        todoModel.add(content, (err, results) => {
            if (err) return console.log(err);
            const data_id = results.insertId;
            res.render('index')
            res.redirect(`home?id=${data_id}`)
        })
    },

    get: (req, res) => {
        if (req.query.id) {
            const id = req.query.id
            todoModel.get(id, (err, results) => {
                if (err) return console.log(err);
                res.render('index', { todo: results[0], isLogin: req.session.isLogin })
            })
        } else {
            console.log(req.session.isLogin)
            res.render('index', { todo: false, data_id: false, isLogin: req.session.isLogin })
        }
    },
}

module.exports = todoController;