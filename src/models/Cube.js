const mongoose = require('mongoose');

const cubeShema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLenght: 50
    },
    imageUrl :{
        type: String,
        required: true,
        //addHttps validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1
    },
    accessories : [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
})

const Cube = mongoose.model('Cube', cubeShema);

module.exports = Cube;