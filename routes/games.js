const app = require('express')();
const router = require('express').Router();
const mongoose = require('mongoose');
const ticketModel = require('../lib/models/ticket');
const userModel = require('../lib/models/user');
const bodyParser = require('body-parser');

// define the routes & end points right here

app.use(bodyParser.json());

router.post('/api/draws/create', (req, res)=>{
// 
});

router.get('/api/draws/:id', (req, res)=>{
// 
});

router.get('/api/draws/:id/announce', (req, res)=>{
// 
});

router.get('/play', (req, res)=>{
// Modified for testing
res.send('The Games we play');
});

router.get('/api/my-tickets', (req, res)=>{
// 
});

module.exports = router;