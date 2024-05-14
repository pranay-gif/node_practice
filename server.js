const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log('welcome practice world');
    res.send("hii pranay");
})

const personRoutes = require('./routes/personRoutes');
app.use('/Person', personRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})