const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ticketDataModelSchema = new mongoose.Schema({

  subTicketID: Array,

},
  { collection: 'tickets' });

const tickets = mongoose.model('tickets', ticketDataModelSchema, "tickets");
console.log(tickets);
module.exports = mongoose.model('tickets', ticketDataModelSchema, "tickets");