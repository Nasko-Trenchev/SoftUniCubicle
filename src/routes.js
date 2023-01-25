const cubeControler = require("./controlers/cubeControler")
const homeControler = require("./controlers/homeControler")
const router = require("express").Router()

router.get("/", homeControler.getHomePage);
router.get("/about", homeControler.getAboutPage);

router.get('/create', cubeControler.getCreateCube);

module.exports = router;