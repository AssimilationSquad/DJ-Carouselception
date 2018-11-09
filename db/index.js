const mongoose = require('mongoose');
require('mongoose').Promise = Promise;

const uri = 'mongodb://mongodb:27017/similar';

mongoose.connect(uri);

const db = mongoose.connection;

module.exports = db;
