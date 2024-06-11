const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const eventDataModelSchema = new mongoose.Schema({

  name: String,
  masterPassword: String,
  editPassword: String
},
  { collection: 'events' });

const events = mongoose.model('events', eventDataModelSchema, "events");
console.log(events);
module.exports = mongoose.model('events', eventDataModelSchema, "events");