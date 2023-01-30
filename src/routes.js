const cubeControler = require("./controlers/cubeControler")
const homeControler = require("./controlers/homeControler")
const accesorryControler = require('./controlers/accessoryControler');

const router = require("express").Router()

router.get("/", homeControler.getHomePage);
router.get("/about", homeControler.getAboutPage);
router.get('/404', homeControler.getErrorPage);

router.get('/create', cubeControler.getCreateCube);
router.post('/create', cubeControler.postCreateCube)
router.get('/cubes/:cubeId/details', cubeControler.getDetails)

router.get('/cubes/:cubeId/attach', cubeControler.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeControler.postAttachAccessory);


router.use('/accessory', accesorryControler);

module.exports = router;