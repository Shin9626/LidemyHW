const db = require('./models');

const { User } = db;

User.create({
  firstName: 'Shin',
  lastName: 'Chen',
}).then(() => {
  console.log('Done!');
});
