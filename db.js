const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.DB_URL_LOCAL

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', err => console.log('Mongoose connection error', err));
db.on('connected', () => {
    console.log('Mongoose connection connected')
});

db.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
}
);

module.exports = db;