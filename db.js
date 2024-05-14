const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/practice_05_24'

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