const express = require('express');
const connection = require('./config/database.js'); 
const createUserTableQuery = require('./model/User/User.js');

const app = express();

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



