# Wedupp Test Repo

This is the repo for the test provided by Wedupp. The live demo for this app is deployed on heroku. The link for the same is 
https://wedupp.herokuapp.com/

# Installation
Follow the steps below to clone this repo and use it for testing on local server. I have kept client and server seperate. They also have seperate dependencies and hence seperate package.json and their respective scripts.

reate a fresh directory wedupp
    
    -git clone https://github.com/kaushikdeo/wedupp.git
    -cd wedupp
    -npm install
    -cd client
    -npm install
    -node server.js
    
The above set of commands will clone this repo, install dependencies and start the server.

# Tech Stack!

  - Nodejs [Server for our app]
  - Express [Express is a layer built on top of Node]
  - React [Front end library used as a View in MVC]
 
  # External Modules!

  - eslint [linting my code so as to weed of errors as they pop up]
  - axios [ similar to fetch api but i feel it is faster (my personal preference). it is used to send and fetch server requests]
  - bootstrap/reactstrap [styling the application]
  - webpack [ bundling all my code and dependencies into one file (main.bundle.js)]
  - webpack-dev-server [ server for development, provides features like hot reloading along with other features]
  - babel [used to transpile new ES7 code to pureJS for browsers can understand], i have used may latest features in this app like async await, es6 arrow functions, and also new experimental features like public class methods 


# APPLICATION
 This app has mainly 2 parts 1.backend node/express server and 2. frontend reactjs to render the View. The computation of the frequency of words in the paragraph is done on the node/express side so that there is less load on the frontend. The computation for the same is available on routes/api/data.js

License
----

MIT

