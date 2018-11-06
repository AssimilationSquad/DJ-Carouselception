const db = require('./index.js');
const Listings = require('./Listings.js');
const fs = require('fs');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

async function insertListings() {
  // await execFile('python',[__dirname + "/randomData.py"]);
  var contents = fs.readFileSync(__dirname + '/seed.txt', 'utf8');
  contents = JSON.parse(contents);
  console.log('json stuff done');
  Listings.create(contents)
    .then(() => db.close())
    .then(console.log('db written to'));
}

insertListings();