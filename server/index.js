const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//MiddleWare
app.use(bodyParser.json());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
