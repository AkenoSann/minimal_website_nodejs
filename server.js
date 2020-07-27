const express = require('express');
const app = express();
const fs = require(`fs`);

app.use(express.static('main'));
app.get('/', function (req, res) {
  fs.readFile('./main/index.html', null, function(error, data){
      res.write(data);
    res.end();
  });
})

 
app.listen(8000, () => console.log(`Server has ready on port 8000`))