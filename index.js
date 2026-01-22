const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/index.js')
const cors = require('cors'); 
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/api', routes)
app.use(cors());

mongoose.connect(DB_URL)
    .then(() => {
        console.log("connect to mongoDB")
    })
    .catch(err => {
        console.log("Error connecting to mongoDB", err);
    });

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

