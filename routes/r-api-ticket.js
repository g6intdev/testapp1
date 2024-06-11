const express = require('express');
const router = express.Router();

const fetchticketData = require('../models/m-ticketdata');
const mticketdata = require('../models/m-ticketdata');
const msubticketdata = require('../models/m-subticketdata');


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => res.send('Hello world. You are at the ticket directory'));

router.get('/test', (req, res) => res.send('book route testing!'));

router.get("/all", async (req, res) => {
  const allticket = await fetchticketData.find();

  try {
    res.send(allticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post("/createnewticket", async (request, response) => {
  const newticketinfo = new mticketdata(request.body);
  console.log(newticketinfo);

  try {
    await newticketinfo.save();
    response.send(newticketinfo);
  } catch (error) {
    response.status(500).send(error);
  }

});

router.get("/:id", async (req, res) => {
  const currentticket = await fetchticketData.findOne({ _id: req.params.id });
  try {
    res.send(currentticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id/add/:st", async (req, res) => {
  const currentticket = await fetchticketData.findOne({ _id: req.params.id });
  try {
    currentticket.subTicketID.push(req.params.st);
    res.send(currentticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;