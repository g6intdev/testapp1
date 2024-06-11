const express = require('express');
const router = express.Router();

const fetchsubticketData = require('../models/m-subticketdata');
const msubticketdata = require('../models/m-subticketdata');


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => res.send('Hello world. You are at the subticket directory'));

router.get('/test', (req, res) => res.send('book route testing!'));

router.get("/all", async (req, res) => {
  const allsubticket = await fetchsubticketData.find();

  try {
    res.send(allsubticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post("/createnewsubticket", async (request, response) => {
  const newsubticketinfo = new msubticketdata(request.body);
  console.log(newsubticketinfo);

  try {
    await newsubticketinfo.save();
    response.send(newsubticketinfo);
  } catch (error) {
    response.status(500).send(error);
  }

});


router.get("/:id", async (req, res) => {
  const currentsubticket = await fetchsubticketData.findOne({ _id: req.params.id });
  try {
    res.send(currentsubticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/:id/enter", async (req, res) => {
  const currentsubticket = await fetchsubticketData.findOne({ _id: req.params.id });
  try {
    currentsubticket.enterTime +=1;
    currentsubticket.state ="in";
    await currentsubticket.save();
    res.send(currentsubticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/:id/exit", async (req, res) => {
  const currentsubticket = await fetchsubticketData.findOne({ _id: req.params.id });
  try {
    currentsubticket.state ="out";
    await currentsubticket.save();
    res.send(currentsubticket);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;