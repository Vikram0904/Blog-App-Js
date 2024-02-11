const express = require('express');
require('./config/database.js'); 
const useRouter = require("./routes/users/userRoutes.js");
const postRouter = require("./routes/posts/postRoutes.js");
const commandRouter = require("./routes/comments/commentRoutes.js");
// const model = require('./model');

const app = express();

app.use('/api/users',useRouter);

app.use('/api/posts',postRouter);

app.use('/api/posts',commandRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



