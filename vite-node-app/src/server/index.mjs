import express from "express";
import cors from "cors";
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(5173, () => {
    console.log("server is running on port 5173");
})