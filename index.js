require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3002

    //can also written'./routes' and it automatically it goes to routes/index 
const router = require('./routes/index'); 

app.use(express.json());
app.use(require('cors')());

app.use("/api",router);

app.listen(port, () => console.log(`server is running => ${port}`));


require('./DL/db.js').connect();
