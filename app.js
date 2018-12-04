const express = require('express');
const bodyParser = require('body-parser');
const person = require('./routes/person.route');
// Initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/person'; //person คือชื่อ database เราสามามารถตั้งจากตรงนี้ได้เลย
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//เรียกใช้ path จาด routes
app.use('/persons', person);

// Strart app
let port = 3000;
app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
});