const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')

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

app.use('/user', routes);

app.use((req, res, next) => {
	res.send('Welcome to Express');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
