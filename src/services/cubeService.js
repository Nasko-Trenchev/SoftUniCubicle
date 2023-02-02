const Cube = require('../models/Cube')

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.update = (id, data) => Cube.findByIdAndUpdate(id, data, {runValidators: true});
