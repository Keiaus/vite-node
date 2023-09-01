const express = require('express');
const cors = require('cors');
const pool = require('./database.js');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a user
app.post("/users", async(req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
})

// get all users

// get a user

// update a user

// delete a user

app.listen(5173, () => {
    console.log("server is running on port 5173");
})