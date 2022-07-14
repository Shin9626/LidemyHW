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
};

module.exports = awardController;
