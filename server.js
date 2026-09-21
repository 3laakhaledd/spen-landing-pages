const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/last-weekend', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spen-last-weekend-standalone-rebuild.html'));
});

app.listen(PORT, () => {
  console.log(`SPEN Landing Pages running on port ${PORT}`);
});
