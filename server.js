const express = require('express');
const connection = require('./config/database.js'); 
const model = require('./model');

const app = express();

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



