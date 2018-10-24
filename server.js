const express = require('express');
const fs = require('fs')
const PORT = process.env.PORT || 3000;

const server = function() {
  const app = express()
  app.get('/', (req, res) => {
    res.send('Hello World!');
    for(i=0; i<1234e4; i++);   
    console.log(`Handled by process ${process.pid}`);
  });
  
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

  console.log(`Worker ${process.pid} started`);
}

module.exports = server;