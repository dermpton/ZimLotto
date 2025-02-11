const app = require('express')();
const router = require('express').Router();
const mongoose = require('mongoose');
const ticketModel = require('../lib/models/ticket');
const userModel = require('../lib/models/user');
const bodyParser = require('body-parser');

// define the routes & end points right here
app.use(bodyParser.json());


router.post('/api/users', async (req, res)=>{
    const body = req.body; //json data type appended to the 
    const newUser = new userModel(body); //the model then accepts a constructor hence ODM
    try{
      const savedUser = await newUser.save();
      return res.status(201).send(savedUser);
    } catch (err){
      console.log(err)
      return res.sendStatus(400);
    }
});

router.get('/api/users/:id', async(req, res)=>{
// 
});

router.post('/register', (req, res)=>{
// Register a new user
});

router.get('/login', (req,res)=>{
// Login and get an authentication token
});

router.get('/logout', (req,res)=>{
// Logout and invalidate the session
});

router.get('/profile', (req, res)=>{
// Get the current user’s profile
});

router.get('/profile/:email',(req, res)=>{
  //here i guess they'll choose what they want update
});

router.get('/tickets', (req, res)=>{
// Update user profile details
});

router.get('/winnings', (req, res)=>{
// View all winnings or prize history
});

router.post('/deposit/:id/:amount', (req, res)=>{
// Deposit funds to user’s account
});

router.post('/withdraw/:id/:balance', (req, res)=>{
// Withdraw funds from user’s account
});


module.exports = router;