var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

// Create the`router` for the app, and export the`router` at the end of your file.
router.post('/insertBurger',function(req,res){
    burger.insertOne("burger_name",req.body.burger_name,function(){
        res.send(200);
    }); 
})
router.get('/', function (req,res) {
    burger.selectAll(function (burgers) {
        res.render('index',{burgers});
    });
})
router.put('/devour', function (req,res) {
    burger.updateOne("devoured", 1, req.body.id,function () {
        res.send(200);
    });
})

module.exports = router;