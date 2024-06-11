// app.js
const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const mainrouter = require("./routes/r");
const bodyParser = require('body-parser')

const app = express();

// Connect Database
connectDB();

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", mainrouter);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));