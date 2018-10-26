const express = require('express');

const Listings = require('../db/Listings.js');

const port = 3003

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.listen(port, function() {
  console.log('listening on port ' + port);
})