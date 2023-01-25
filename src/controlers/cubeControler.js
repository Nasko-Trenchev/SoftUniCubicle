const Cube = require('../models/Cube');

exports.getCreateCube = (req,res) =>{
    res.render('create');   
}

exports.postCreateCube = (req, res) =>{

    //save 
    const {name, descroption, difficultiLevel, imageUrl} = req.body;
    let cube = new Cube(name, descroption, difficultiLevel, imageUrl);
    Cube.save(cube);

    //redirect
    res.redirect('/');
}
