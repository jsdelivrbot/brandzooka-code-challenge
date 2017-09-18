var express = require('express');
var router = express.Router();
const knex = require('../knex');


router.get('/', function(req, res, next) {
   knex('items')
      .then((data) => {
         console.log('in back end here is the data for GET', data);
         res.send(data)
      })
});


router.post('/', function(req, res, next) {
   console.log('post req body', req.body);
   knex('items')
      .returning('*')
      .insert( req.body )
      .then((data) => {
         console.log('in back end here is the data for POST', data)
         res.send(data)
      })
});

router.delete('/:id', function(req, res, next) {
});


module.exports = router;
