const mongoose = require('mongoose');
const uri = 'mongodb://localhost/similar';

const db = mongoose.connect(uri);

module.exports = db;