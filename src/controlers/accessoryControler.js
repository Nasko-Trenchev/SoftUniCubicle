const router = require('express').Router();

const Acessory = require('../models/Accessory');

router.get('/create', (req, res) =>{

    res.render('accessory/create')
})

router.post('/create', async (req, res) =>{

    const {name, description, imageUrl} = req.body;

    await Acessory.create({name, description, imageUrl});

    res.redirect('/');

})

module.exports = router;