require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
