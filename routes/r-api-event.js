const express = require('express');
const router = express.Router();

const fetcheventData = require('../models/m-eventdata');
const meventdata = require('../models/m-eventdata');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => res.send('Event directory'));

router.get("/all", async (req, res) => {
  const allevent = await fetcheventData.find();
  try {
    res.send(allevent);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/createnewevent", async (request, response) => {
  const neweventinfo = new meventdata(request.body);
  console.log(neweventinfo);
  try {
    await neweventinfo.save();
    response.send(neweventinfo);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const currentevent = await fetcheventData.findOne({ _id: req.params.id });
    res.send(currentevent);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/verify/:id/:password", async (req, res) => {
  try {
    const currentevent = await fetcheventData.findOne({ _id: req.params.id });
    if (currentevent.masterPassword == req.params.password) {
      res.send("master")
    } else if (currentevent.editPassword == req.params.password) {
      res.send("edit")
    } else {
      res.send("wrong");
    }
  } catch (error) {
    res.status(500).send("wrong");
  }
});

module.exports = router;