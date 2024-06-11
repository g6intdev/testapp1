const express = require('express');
const router = express.Router();

const userapirouter = require("./r-api-user");
const eventapirouter = require("./r-api-event")
const ticketapirouter = require("./r-api-ticket")
const subticketapirouter = require("./r-api-subticket")


console.log("connected to api router..");

router.use("/user", userapirouter);

router.use("/event", eventapirouter);

router.use("/ticket", ticketapirouter);

router.use("/subticket", subticketapirouter);



router.get('/', (req, res) => res.send('Hello world. You are at the api directory'));

module.exports = router;