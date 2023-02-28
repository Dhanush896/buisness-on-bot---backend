const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const db =require('./queries')
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
 
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/search',db.getUsers)
app.put('/users/:id',db.updateUser)
app.get('/users1/:id',db.getUser)
app.get('/branch',db.getbranch)
app.listen(port, () => {
  console.log("App running on port 4000");
});