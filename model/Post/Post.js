
const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../../config/database.js');
const User = require('../User/User.js');


const sequelize = new Sequelize('blog_api', 'root', 'vikram@1073', {
    host: 'localhost',
    dialect: 'mysql'
  });

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'posts', 
  timestamps: true, 
  underscored: true 
});

Post.belongsTo(User, { foreignKey: 'authorId' });

sequelize.sync()
  .then(() => {
    console.log('Posts table synced');
  })
  .catch(err => {
    console.error('Error syncing posts table:', err);
  });

module.exports = Post;
