
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('blog_api', 'root', 'vikram@1073', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activeStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'users', 
  timestamps: true, 
  underscored: true 
});

sequelize.sync()
  .then(() => {
    console.log('Users table synced');
  })
  .catch(err => {
    console.error('Error syncing users table:', err);
  });

module.exports = User;
