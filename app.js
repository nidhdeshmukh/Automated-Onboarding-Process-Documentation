const express = require('express');
const bodyParser = require('body-parser');
const uploadRoutes = require('./routes/upload');
const recordsRoutes = require('./routes/records');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use('/api/upload', uploadRoutes);
app.use('/api/records', recordsRoutes);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
