const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (index.html, etc.) from this directory
app.use(express.static(__dirname));

// Fallback: always serve index.html (single-page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Mini Logic Sudoku running on port ${PORT}`);
});
