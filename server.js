const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json()); // Parse JSON requests

// Define a route for the root path ("/") to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/scrape', async (req, res) => {
  const name = req.body.name;
  const result = await scrapeData(name);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

