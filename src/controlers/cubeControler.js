const Cube = require('../models/Cube');

exports.getCreateCube = (req,res) =>{
    res.render('create');   
}

exports.postCreateCube = (req, res) =>{

    //save
    console.log(req.body);
    let cube = new Cube(req.body);
    Cube.save(cube);
    
    //redirect
    res.redirect('/');
}
