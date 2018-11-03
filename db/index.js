const mongoose = require('mongoose');
require('mongoose').Promise = Promise;

const uri = 'mongodb://localhost/similar';

mongoose.connect(uri);

const db = mongoose.connection;

module.exports = db;
