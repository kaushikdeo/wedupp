const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//initialise express app
const app = express();

//Add body-parser and cors middleware
app.use(cors(), bodyParser.json());

//start the express server
app.listen(PORT, ()=>console.log("Server is live on port", PORT));

