'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const config = require('./config');
// mongoose.set('useNewUrlParser', true);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology: true');

const app = express();
const router = express.Router();



// Conecta ao banco de dados
mongoose.connect(config.connectionString);

// Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;