const cubeControler = require("./controlers/cubeControler")
const router = require("express").Router()


router.get("/", (req,res) =>{
    res.render('index')
});

router.get('/about', (req,res)=> {
    res.render('about');
})

router.get('/create', cubeControler.getCreateCube);

module.exports = router;