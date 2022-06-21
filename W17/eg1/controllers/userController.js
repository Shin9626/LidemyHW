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

    login: (req, res) => {
        res.render('login')
    },

    logout: (req, res) => {
        req.session.isLogin = false;
        res.redirect('/home');
    },

    handleLogin: (req, res) => {
        if (req.body.password === 'abc') {
            req.session.isLogin = true;
            res.redirect('/home')
        } else {
            req.flash('errorMessage', '請輸入正確密碼')
            res.redirect('/login')
        }
    },

    register: (req, res) => {
        res.render('register')
    },

    handleRegister: (req, res) => {
        
    }
}

module.exports = todoController;