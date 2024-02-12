const express = require('express');
const userRouter = require("./routes/users/userRoutes.js");
const postRouter = require("./routes/posts/postRoutes.js");
const commentRouter = require("./routes/comments/commentRoutes.js");
const errorHandler = require('./middleware/errorHandler.js');

require('dotenv').config();
require('./config/database'); 


const app = express();


app.use(express.json());

app.use('/api/users',userRouter);

app.use('/api/posts',postRouter);

app.use('/api/comments',commentRouter);

app.use(errorHandler);

app.use('*',(req,res)=>{
  res.status(404).json({
    message:`${req.originalUrl}-Is Not Found`,
  })
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



