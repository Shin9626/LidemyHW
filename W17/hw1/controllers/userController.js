const db = require('../models');

const { User, Article } = db;

const userController = {
  getAll: (req, res) => {
    Article.findAll({
      order: [['createdAt', 'DESC']],
    }).then((articles) => {
      res.render('index', { articles });
    });
  },

  about: (req, res) => {
    res.render('about');
  },

  login: (req, res) => {
    res.render('login');
  },

  logout: (req, res) => {
    req.session.username = null;
    res.redirect('/');
  },

  admin: (req, res) => {
    if (req.session.username) {
      res.render('admin');
    } else {
      res.redirect('/');
    }
  },

  handleLogin: (req, res) => {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username,
      },
    }).then((user) => {
      if (!user || user.password !== password) {
        req.flash('errorMessage', '輸入有誤或使用者不存在！');
        res.redirect('back');
      } else {
        req.session.username = username;
        res.redirect('/');
      }
    }).catch((err) => {
      req.flash('errorMessage', err.toString());
      res.redirect('back');
    });
  },

  handleAddArticle: (req, res) => {
    const { title, content } = req.body;
    Article.create({
      title,
      content,
    }).then(() => {
      res.redirect('/');
    });
  },
};

module.exports = userController;
