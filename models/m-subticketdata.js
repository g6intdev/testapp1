const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const subTicketDataModelSchema = new mongoose.Schema({

  eventID: String,
  maxEnterTime: Number,
  enterTime: Number,
  state: String,
},
  { collection: 'subTickets' });

const subTickets = mongoose.model('subTickets', subTicketDataModelSchema, "subTickets");
console.log(subTickets);
module.exports = mongoose.model('subTickets', subTicketDataModelSchema, "subTickets");