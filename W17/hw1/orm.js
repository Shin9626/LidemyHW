const db = require('./models');

const { User } = db;

User.create({
  username: 'admin',
  password: '9999',
}).then(() => {
  console.log('Done!');
});
