// import express
const express = require('express');
// require dotenv
const dotenv = require('dotenv');
// require morgan
const morgan = require('morgan');
// require colors
const colors = require('colors');
// require the devcamp router
const devCampRouter = require('./routes/bootcamp');
// import connect to db
const connectDb = require('./config/db');
// create an app using express
const app = express();

// load the configuration
dotenv.config({ path: './config/config.env'});

// connect to the db
connectDb();
// set the port
const PORT = process.env.PORT || 3000;

// log the requests made in dev mode
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// set the bootcamp routes
app.use('/api/v1/bootcamps', devCampRouter);

// function for starting the server
const server = app.listen(
    PORT, 
    console.log(`Server runninng in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);


// GLOBALE FUNCTION FOR HANDLING unhandledpromise rejection
process.on('unhandledRejection', (error, promise) => {
    // log the error
    console.log(`Error: ${error}`.red.bold);
    // shutdown the server
    server.close(() => process.exit(1));
});
