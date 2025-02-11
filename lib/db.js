const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/lottery')
                    .then(()=> console.log('Connection Succeeded'))
                    .catch((err)=> console.error(`Error: ${err}`));


// Understanding MongoDB:

/*
Help Guide

The Hierarchy
Database - the overall container
Collection(s) - Describes a set of documents (like Tables)
Document -  A single more like a record/tuple from MySQL 
Model - the ODM (Object Data Modelling library) used to do CRUD
Schema - Describes the structure and how to store the data in a document

*/