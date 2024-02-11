const express = require('express');
require('dotenv').config();

require('./config/database'); 


const userRouter = require("./routes/users/userRoutes.js");
const postRouter = require("./routes/posts/postRoutes.js");
const commentRouter = require("./routes/comments/commentRoutes.js");

const app = express();


app.use(express.json());

app.use('/api/users',userRouter);

app.use('/api/posts',postRouter);

app.use('/api/comments',commentRouter);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



