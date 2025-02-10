const mongoose = require('mongoose');
// async function that implements the await keyword to 
// ensure that the request is not running a single instead it shall

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.01/27017/lottery',{
           useNewUrlParser: true, // compatibility with the latest mongodb driver
           useUnifiedTopology: true //
        });
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error('MongoDB Connection: Error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
