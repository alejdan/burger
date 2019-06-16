var orm = require("../config/orm.js");

// Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
let burger = {
    //insert one
    insertOne: function (cols, values, cb){
        orm.insertOne('burgers', cols, values, cb);
    },
    //select all
    selectAll: function (cb){
        orm.selectAll('burgers',cb);
    },
    //update one
    updateOne: function ( cols, values, id, cb){
        orm.updateOne("burgers", cols, values, id, cb);
    }
}
module.exports = burger;
// Export at the end of the`burger.js` file.