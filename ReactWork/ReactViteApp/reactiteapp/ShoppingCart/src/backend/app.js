import express from 'express';
import cors from 'cors';
import fs from 'fs';


const app = express(); // create the http server (client-server architecture (2-tier)) 
const port = 3000; //  	A port is a virtual endpoint used by computers to distinguish different types of network traffic

app.use(express.json()); // Middleware to Convert the data into json 
app.use(cors());

app.listen(port, () => {
    console.log("Server is running on :" + port);
})

app.get("/", (req, res) => {
    res.send("<h2> Welcome to Express Service </h2>");
})

app.get("/msg", (req,res) => {
    res.json({msg: "Hii, inside /msg endpoint"})
})

app.post("/register", (req,res) => {
    res.json({msg: "Registration Done Successfully!"})
    const data = req.body;
    console.log(data)
})

app.post("/login", (req,res) => {
    res.json({msg: "Hii, Login API Calling"})
})



