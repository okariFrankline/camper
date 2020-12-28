/**
 * ALLOWS FOR THE CONNECTION TO THE DB
 */
const mongoose = require('mongoose');
require('colors');

// function for connecting to the db
const connectDb = async () => {
    // connect to the db
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    // log the connection
    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline.bold);
}

// EXPORT THE CONNECT FUNCTION
module.exports = connectDb;