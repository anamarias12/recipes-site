// importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = 8080;

// configure dotenv
dotenv.config();

// initialize the app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

if (!process.env.ATLAS_URI) {
    console.error('Error: ATLAS_URI is not defined in .env');
    process.exit(1);
}

// connect to mongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.on('error', (error) => console.error(error))
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// require and use route files
const usersRouter = require('./routes/users');
// ensure this file exists in the "routes directory"

app.use('/users', usersRouter);

// server listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});