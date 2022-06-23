const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const saltRounds = 10

const userController = {

    login: (req, res) => {
        res.render('login')
    },

    logout: (req, res) => {
        req.session.username = null;
        res.redirect('/home');
    },

    register: (req, res) => {
        res.render('register')
    },

    handleLogin: (req, res, next) => {
        const { username, password } = req.body;
        if (!username || !password) {
            req.flash('errorMessage', '有未填欄位！');
            return next()
        }
        userModel.get(username, (err, user) => {
            if (err) {
                req.flash('errorMessage', err.toString());
                return next()
            }
            if (!user) {
                req.flash('errorMessage', '帳號不存在或密碼錯誤！');
                return next()
            }
            bcrypt.compare(password, user.password, (err, isSuccess) => {
                if (err || !isSuccess) {
                    req.flash('errorMessage', '帳號不存在或密碼錯誤！')
                    return next()
                }
                req.session.username = username;
                res.redirect('/home');
            })
        })
    },

    handleRegister: (req, res, next) => {
        const { username, nickname, password } = req.body
        if (!username || !nickname || !password) {
            req.flash('errorMessage', '缺少必要欄位')
            return next()
        }
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                req.flash('errorMessage', err.toString())
                return next()
            }
            userModel.add({
                username,
                nickname,
                password: hash
            }, (err) => {
                if (err) {
                    req.flash('errorMessage', '該 username 已經重複');
                    return next()
                }
                req.session.username = username;
                res.redirect('/home')
            })
        })
    },
}

module.exports = userController;