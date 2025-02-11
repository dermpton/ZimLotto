const express = require('express');

const app = express();
const path = require('path');
const mongo = require('./lib/db');  // immediate execution
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/users');
const gameRouter = require('./routes/games');

app.set('port', process.env.PORT || 3000);

// Global Routes/Middleware before anything

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); //communication with different ports
app.use(bodyParser.json()); // parse json in the request bodies
// app.use(cookieParser); // session storage & management


// Based on the way I structure the code, I think
// I'll add the routes and middleware using the module exports 

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use('/users',userRouter);
app.use('/api', gameRouter);

// Server related code 
app.listen(app.get('port'), ()=>{
    console.log(`Server started at http://localhost:${app.get('port')} press ctrl + c to exit`);
});
