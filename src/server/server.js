const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
let cors = require("cors"); // allows other ports
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// connect to DB
mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to db');
});

const api = require('./routes/api')

app.use(cors());
// Route Middleware
app.use('/api', api);
app.use(express.static('../../dist/'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
