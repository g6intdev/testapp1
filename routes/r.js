const express = require('express');

const router = express.Router();

const cors = require('cors')

const apirouter = require("./r-api");


console.log("connected to main router..");

router.use(cors())

router.use("/api", apirouter);

router.get('/', (req, res) => res.send('Hello world. You are at the root directory'));

module.exports = router;