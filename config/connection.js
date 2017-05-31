//Require mysql
var mysql = require('mysql');
var connection;
//Set up our connection information
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ce22jdyzaxwdfti7',
    password: 'ykocofwkax60c58z',
    port: '3306',
    database: 'pmwpcaxpyxv10s9f'
  });
}
//Connect to the database
// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });
// Export connection
module.exports = connection;
