const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');
const productRoutes = require('./Routes/productRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connect');
  },
  (err) => {
    console.log('Can not connect to the databse' + err);
  }
);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/products', productRoutes);

const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log(' Listening on port ' + port);
});
