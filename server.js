const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user')
const authRouter = require('./routes/authentication')

const server = express();

dotenv.config();

//Connected to Database
mongoose
  .connect(
      process.env.MONGO_URL
  )
  .then(()=>{
    console.log("Database Successfully connected")
  })
  .catch((err) => {
    console.log(err)
});

server.use(express.json());

server.use("/api/v1", userRouter);
server.use("/api/v1", authRouter);

server.listen(process.env.PORT || 3000, ()=> {
    console.log('listening on port 3000');
});