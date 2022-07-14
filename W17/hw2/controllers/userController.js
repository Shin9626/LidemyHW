const db = require('../models');

const { User, Award } = db;

const userController = {
  home: (req, res) => {
    res.render('index');
  },

  dashboard: (req, res) => {
    if (!req.session.username) {
      res.redirect('login');
    } else {
      Award.findAll({
        order: [['createdAt', 'DESC']],
      }).then((awards) => {
        res.render('dashboard', { awards });
      });
    }
  },

  login: (req, res) => {
    res.render('login');
  },

  handleLogin: (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      req.flash('errorMessage', '有未填欄位！');
      res.redirect('dashboard');
      next();
    }

    User.findOne({
      where: {
        username,
      },
    }).then((user) => {
      if (!user) {
        req.flash('errorMessage', '帳號不存在或密碼錯誤！');
        res.redirect('dashboard');
        next();
      }

      if (user.password !== password) {
        req.flash('errorMessage', '帳號不存在或密碼錯誤！');
        res.redirect('dashboard');
        next();
      }
      req.session.username = username;
      res.redirect('dashboard');
    }).catch((err) => {
      req.flash('errorMessage', err.toString());
      next();
    });
  },

  handleLogout: (req, res) => {
    req.session.username = null;
    res.redirect('/');
  },
};

module.exports = userController;
