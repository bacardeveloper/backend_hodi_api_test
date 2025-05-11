const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});