const mongoose = require('mongoose');
const uri = 'mongodb://localhost/similar';

mongoose.connect(uri);

const db = mongoose.connection;

module.exports = db;