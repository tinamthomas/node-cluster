const express = require('express')
const PORT = process.env.PORT || 3000;

const server = function() {
  const app = express()
  app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(`Handled by process ${process.pid}`);
  });
  
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

  console.log(`Worker ${process.pid} started`);
}

module.exports = server;