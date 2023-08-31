import express from 'express';
import cors from 'cors';
import pool from './database.js';
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.post("/users", async(req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
})

// create a user

// get all users

// get a user

// update a user

// delete a user



app.listen(5173, () => {
    console.log("server is running on port 5173");
})