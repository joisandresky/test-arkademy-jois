const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');;
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const DB = process.env.DB_URL || 'mongodb://localhost/arkademy';

const app = express();

mongoose.connect(DB);
mongoose.connection.on('connected', () => console.log('Database Connected'));
mongoose.connection.on('error', (err) => console.log('Error to Connect Database', err));

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/candidates', require('./api/candidate'));

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));