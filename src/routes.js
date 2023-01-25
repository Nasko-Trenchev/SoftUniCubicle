const cubeControler = require("./controlers/cubeControler")
const homeControler = require("./controlers/homeControler")
const router = require("express").Router()

router.get("/", homeControler.getHomePage);
router.get("/about", homeControler.getAboutPage);

router.get('/create', cubeControler.getCreateCube);
router.post('/create', cubeControler.postCreateCube)
router.get('/details/:cubeId', cubeControler.getDetails)

module.exports = router;