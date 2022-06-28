const bcrypt = require('bcrypt');
const db = require('../models');

const { User } = db;

const saltRounds = 10;

const userController = {

  login: (req, res) => {
    res.render('login');
  },

  logout: (req, res) => {
    req.session.username = null;
    res.redirect('/home');
  },

  register: (req, res) => {
    res.render('register');
  },

  handleLogin: (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      req.flash('errorMessage', '有未填欄位！');
      next();
    }

    User.findOne({
      where: {
        username,
      },
    }).then((user) => {
      if (!user) {
        req.flash('errorMessage', '帳號不存在或密碼錯誤！');
        next();
      }

      bcrypt.compare(password, user.password, (err, isSuccess) => {
        if (err || !isSuccess) {
          req.flash('errorMessage', '帳號不存在或密碼錯誤！');
          next();
        }
        req.session.username = username;
        req.session.userId = user.id;
        res.redirect('/home');
      });
    }).catch((err) => {
      req.flash('errorMessage', err.toString());
      next();
    });
  },

  handleRegister: (req, res, next) => {
    const { username, nickname, password } = req.body;
    if (!username || !nickname || !password) {
      req.flash('errorMessage', '缺少必要欄位');
      next();
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        req.flash('errorMessage', err.toString());
        next();
      }

      User.create({
        username,
        nickname,
        password: hash,
      }).then((user) => {
        req.session.username = username;
        req.session.userId = user.Id;
        res.redirect('/home');
      }).catch(() => {
        req.flash('errorMessage', '該 username 已經重複');
        next();
      });
    });
  },
};

module.exports = userController;
