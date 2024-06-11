const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const userDataModelSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,

},
 { collection: 'users' });

const users = mongoose.model('users', userDataModelSchema, "users" );
console.log(users);
module.exports = mongoose.model('users', userDataModelSchema, "users");