const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
var corsOptions = {
  origin: "*",
  methods:['GET, POST, PUT, DELETE, PATCH, OPTIONS'],
  allowedHeaders:'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'

};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const employeeRoutes = require('./routes/employee.routes')
// using as middleware
app.use('/api/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

