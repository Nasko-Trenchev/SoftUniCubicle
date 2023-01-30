//const Cube = require('../models/Cube_old');
const Cube = require('../models/Cube');
const db = require("../db.json");

exports.getCreateCube = (req,res) =>{
    res.render('create');   
}

exports.postCreateCube = async (req, res) =>{

    //save 
    const {name, description, imageUrl, difficultyLevel} = req.body;
    
    let cube = new Cube ({name, description, imageUrl, difficultyLevel});
    await cube.save(cube);

    //redirect
    res.redirect('/');
}

exports.getDetails = async (req,res) =>{

    //let cubeId = req.params.cubeId;

    //let cube = db.cubes.find(x => x.id === cubeId)

    let cube = await Cube.findById(req.params.cubeId).lean();

    if(!cube){
        return res.redirect("/404");
    }

    res.render("details", {cube});
}
