const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//DB Conection
require('./db');

//route
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log('app is ruuning');
});
