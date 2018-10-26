const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise; //makes mongoose use js's built in promises

const listingSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  type: String,
  beds: Number,
  price: Number,
  stars: Number,
  imgs: [String]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;