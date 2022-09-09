const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoute = require('./routes/user')
const orderRoute = require('./routes/order')
const productRoute = require('./routes/product')
const checkoutRoute = require('./routes/checkout')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

mongoose
    .connect(process.env.DB, {useNewUrlParser: true})
    .then(() => console.log('Connected to the database successfully'))
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/order', orderRoute);
app.use('/product', productRoute);
app.use('/checkout', checkoutRoute);

app.use((req, res, next) => {
	res.send('Welcome to Express');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
