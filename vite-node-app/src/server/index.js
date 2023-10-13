"use strict";

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
        const { firstName } = req.body;
        const { lastName } = req.body;
        const newUser = await pool.query("INSERT INTO Person (firstName, lastName) VALUES ($1, $2) RETURNING *", 
            [firstName, lastName]
        );
        res.json(newUser);
    } catch (error) {
        console.error(error.message);
    }
})

// get all users
app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM Person");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// get a user
app.get("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM Person WHERE personId = $1", [id]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// update a user
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { firstName } = req.body;
        const { lastName } = req.body;
        const updateUser = await pool.query("UPDATE Person SET firstName = $1, lastName = $2 WHERE personId = $3",
            [firstName, lastName, id]
        );
        res.json("User was updated!");
    } catch (error) {
        console.error(error.message);
    }
})

// delete a user
app.delete("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM Person WHERE personId = $1", 
            [id]
        );
        res.json("User was deleted!")
    } catch (error) {
        console.error(error.message);
    }
})

// Port number must be different from vite and postgres default
app.listen(5222, () => {
    console.log("Server is running on port 5222");
})