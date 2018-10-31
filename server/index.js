const express = require('express');
const path = require('path');

const Listings = require('../db/Listings.js');

const port = 3003;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/similar/rooms/:id', (req, res) => {
  Listings.findById(req.params.id, 'type')
    .exec((err, entry) => {
      if (err) {
        res.status(500);
        res.send('error retrieving data');
      } else {
        Listings.find({ type: entry.type })
          .limit(12)
          .exec((error, data) => {
            if (error) {
              res.status(500);
              console.log(error);
              res.send('error finding similar listings');
            } else {
              res.status(200);
              res.send(data);
            }
          });
      }
    });
});

app.use('/rooms', express.static(path.join(__dirname, '..', 'public')));

app.get('/rooms/:id', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
