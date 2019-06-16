var connection = require("./connection");

// In the`orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers.
//These are the methods you will need to use in order to retrieve and store data in your database.
module.exports = {

    // `selectAll()`
    selectAll: function(table, cb){
        connection.query("SELECT * FROM ??", table, function (err, results) {
            cb(results);
        })
    },
    // `insertOne()`S
    insertOne: function(table, cols, values, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, cols, values], function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    // `updateOne()`
    updateOne: function(table, cols, values, id, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [table, cols, values, id], function(err, results) {

            if (err) throw err;
            cb(results);


        })
    }
    
}
