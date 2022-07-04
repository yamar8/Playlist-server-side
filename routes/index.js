const express = require('express');

//create a server (live inside the main server - app)
const router = express.Router();

//import these three servers
const userRouter = require('./userRoute');
const itemRouter = require('./itemRoute');
const orderRouter = require('./orderRoute');

//to link these three servers to the router server.
 router.use("/users", userRouter) // now userRouter server will always starts with /users path
 router.use("/items", itemRouter)
 router.use("/orders", orderRouter)

 //exports router server to the main server app located in the index.js source folder.
module.exports = router; 