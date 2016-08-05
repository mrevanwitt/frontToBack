var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://postgres:Voidray1@localhost/postgres';

var app = module.exports = express();
var massiveInstance = massive.connectSync({
  connectionString: connectionString
});
app.set('db', massiveInstance);
var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

console.log(db.get_all_products);

// app.get('/test', function(req, res, next) {
//   res.status(200).send('whoop');
// });

app.get('/products', function(req, res, next) {
  db.get_all_products(function(err, products) {
    res.status(200).send(products);
  });
});

app.get('/products/name/:name', function(req, res, next) {
  db.get_product_by_name(req.params.name, function(err, product) {
    res.status(200).send(product);
  });
});

app.post('/products', function(req, res, next) {
  console.log(req.body);
  db.add_product_to_inventory([req.body.name, req.body.description, req.body.pirce, req.body.type], function(err, response) {
    if(err)console.log(err);
    console.log(response);
  })
});

app.put('/products/:id', function(req, res, next){

});

app.delete('/products/:id', function(req, res, next){
  db.remove_product(req.params.id, function(err, product) {
    res.status(200).send(product);
  });
});





app.listen(3535, function() {
  console.log('listening on 3535');
});
