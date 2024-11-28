// importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// configure dotenv
dotenv.config();

const PORT = process.env.PORT;

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
connection.on('error', (error) => console.error(error));
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// require and use route files
const usersRouter = require('./routes/user');
const recipesRouter = require('./routes/recipe');

// the /users part of the site will be handled by usersRouter
app.use('/', usersRouter);
// the recipe part of the site will be handled by recipesRouter
app.use('/recipe', recipesRouter);

// serve static files from the frontend
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// fallback to serving the frontend for unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// start the server
app.listen(PORT, (err) => {
    console.log(`Server is running on port: ${PORT}`);
});