const db = require('../models');

const { Comment } = db;
const { User } = db;

const commentController = {
  add: (req, res) => {
    const { userId } = req.session;
    const { content } = req.body;
    if (!userId || !content) {
      req.flash('errorMessage', '留言失敗！');
      res.redirect('/home');
    }

    Comment.create({
      content,
      UserId: userId,
    }).then(() => {
      res.redirect('/home');
    });
  },

  index: (req, res) => {
    Comment.findAll({
      include: User,
      order: [['createdAt', 'DESC']],
    }).then((comments) => {
      res.render('index', { comments });
    });
  },

  delete: (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.userId,
      },
    }).then((comment) => comment.destroy()).then(() => {
      res.redirect('/home');
    }).catch(() => {
      res.redirect('/home');
    });
  },

  update: (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id,
      },
    }).then((comment) => {
      res.render('update', {
        comment,
      });
    });
  },

  handleUpdate: (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.userId,
      },
    }).then((comment) => comment.update({
      content: req.body.content,
    })).then(() => {
      res.redirect('/home');
    }).catch(() => {
      res.redirect('/home');
    });
  },
};

module.exports = commentController;
