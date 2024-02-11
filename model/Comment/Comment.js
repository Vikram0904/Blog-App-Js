const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../../config/database.js');
const Post = require('../Post/Post.js');
const User = require('../User/User.js');


const sequelize = new Sequelize('blog_api', 'root', 'vikram@1073', {
    host: 'localhost',
    dialect: 'mysql'
  });


const Comment = sequelize.define('Comment', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'comments',
  timestamps: true 
});


Comment.belongsTo(Post);
Comment.belongsTo(User); 

Comment.sync()
  .then(() => {
    console.log('Comments table synced');
  })
  .catch(err => {
    console.error('Error syncing comments table:', err);
  });

module.exports = Comment;
