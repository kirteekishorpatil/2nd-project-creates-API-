// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kirtee@123",
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// con.query("CREATE DATABASE meraki_data", function (err, result) {
//     if (err){
//         console.log("Database  already created");
//     }
//     else{
//         console.log("Database created");
//     }
//   });

  const knex = require("knex")({

    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Kirtee@123',
      database: 'meraki_data'
    }
  })
  function create_table() {
    knex.schema.hasTable("data_meraki").then(function (exists) {
      if (!exists) {
        // console.log({ Success: `users table created successfully.` });
        return knex.schema.createTable("data_meraki", function (t) {
          t.increments('id'),
            t.string('name'),
            t.string('logo'),
            t.string('notes'),
            t.string('days_to_complete')
            t.string('short_description')
            t.string('type')
            t.string('course_type')
            t.string('lang_available')
        });
      } else {
        // console.log({ Sorry: `users table already exist!` });
      }
    });
  }
  
create_table()



module.exports=knex