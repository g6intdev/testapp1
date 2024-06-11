const express = require('express');
const router = express.Router();

const fetchUserData = require('../models/m-userdata');
const mUserdata = require('../models/m-userdata');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => res.send('Hello world. You are at the user directory'));

router.get('/test', (req, res) => res.send('book route testing!'));
/*
router.get("/all", async(req, res)=>{
  console.log(fetchUserData);
  res.send(JSON.stringify(fetchUserData));
*/

router.get("/all", async (req, res) => {
  const allUser = await fetchUserData.find();

  try {
    res.send(allUser);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});



router.post("/createnewuser", async (request, response) => {
  const newuserinfo = new mUserdata(request.body);
  console.log(newuserinfo);

  try {
    await newuserinfo.save();
    response.send(newuserinfo);
  } catch (error) {
    response.status(500).send(error);
  }

});

router.get("/:id", async (req, res) => {
  const currentuser = await fetchUserData.findOne({ _id: req.params.id });
  try {
    res.send(currentuser);
    console.log("sent");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;