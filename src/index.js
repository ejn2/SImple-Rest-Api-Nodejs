const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');


const app = express();


app.use(bodyParser.json());
app.use(morgan('dev'));

require('./routes/router')(app);

app.listen(3000, () => console.log("..."));