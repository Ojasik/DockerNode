const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins & Docker!');
});

app.listen(port, "0.0.0.0",() => {
  console.log(`App listening at http://localhost:${port}`);
});
