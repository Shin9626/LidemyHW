const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('orm_test', {
  // Model attributes are defined here
  username: {
    type: Sequelize.STRING,
  },
  nickname: {
    type: Sequelize.STRING,
  },
});

sequelize.sync().then(() => {
  User.findOne({
    where: {
      id: 3,
    },
  }).then((user) => {
    const { username } = user;
    user.destroy().then(() => {
      console.log(`${username}has been destroyed!`);
    });
  });
});
