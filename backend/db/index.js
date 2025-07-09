const mongoose = require('mongoose');
//mongoose driver for connecting to databse

//cooncetion path(conncetion string) to the DataBase
mongoose
  .connect('mongodb://localhost:27017/e-commerce')
  .then(() => console.log('DB Connected'))
  .catch(e => console.log(e));

module.exports = mongoose;
