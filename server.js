// import express
const express = require('express');
// require dotenv
const dotenv = require('dotenv');

// create an app using express
const app = express();

// load the configuration
dotenv.config({ path: './config/config.env'});

// set the port
const PORT = process.env.PORT || 3000;

// function for starting the server
app.listen(
    PORT, 
    console.log(`Server runninng in ${process.env.NODE_ENV} mode on port ${PORT}`)
);