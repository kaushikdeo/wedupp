const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const data = require('./routes/api/data');

//initialise express app
const app = express();


//Add body-parser and cors middleware
app.use(cors(), bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

  // handle every other route with index.html, which will contain
  // a script tag to your application's JavaScript file(s).

  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  });

//use the API Routes
app.use('/api/data', data);


//start the express server
app.listen(PORT, ()=>console.log("Server is live on port", PORT));

