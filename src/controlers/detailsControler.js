const db = require("../db.json");


exports.getDetailsCube = (req,res) =>{

    res.render("details/:id")

}