const express = require('express');

//Create our App
const app = express();

app.use(express.static('public'));
app.listen(8080, function(){
  console.log('Server Up');
});
