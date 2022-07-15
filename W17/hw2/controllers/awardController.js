const db = require('../models');

const { Award } = db;

const awardController = {
  handleAdd: (req, res) => {
    const {
      name, content, rate, url,
    } = req.body;
    Award.create({
      name, content, rate, url,
    }).then(() => {
      res.redirect('dashboard');
    });
  },

  update: (req, res) => {
    if (!req.session.username) {
      res.redirect('/login');
    }

    Award.findOne({
      where: {
        id: req.params.id,
      },
    }).then((award) => {
      res.render('update', { award });
    });
  },

  handleUpdate: (req, res) => {
    const {
      name, content, rate, url,
    } = req.body;
    Award.findOne({
      where: {
        id: req.params.id,
      },
    }).then((award) => award.update({
      name, content, rate, url,
    })).then(() => res.redirect('/dashboard'))
      .catch(() => res.redirect('/dashboard'));
  },

  handleDelete: (req, res) => {
    Award.findOne({
      where: {
        id: req.params.id,
      },
    }).then((award) => award.destroy())
      .then(() => res.redirect('/dashboard'))
      .catch((err) => res.end(err.toString()));
  },
};

module.exports = awardController;
