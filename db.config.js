const mysql = require('mysql');
// connection configurations
const dbConnexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pointage'
});
// connect to database
dbConnexion.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConnexion;