const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

app.get("/", (req, res) => res.send("Running Successfully!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`))