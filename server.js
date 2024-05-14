const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log('welcome practice world');
    res.send("hii pranay");
})

const personRoutes = require('./routes/personRoutes');
app.use('/Person', personRoutes);

app.listen(5000, () => {
    console.log('listening on port 5000');
})