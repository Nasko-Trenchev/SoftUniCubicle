const cubeControler = require("./controlers/cubeControler")
const homeControler = require("./controlers/homeControler")
const accesorryControler = require('./controlers/accessoryControler');
const authControler = require('./controlers/authController');

const {isAuthenticated} = require('./middlewares/authMiddleware')

const router = require("express").Router()

router.get("/", homeControler.getHomePage);
router.get("/about", homeControler.getAboutPage);
router.get('/404', homeControler.getErrorPage);

router.use('/', authControler);

router.get('/cubes/create', isAuthenticated, cubeControler.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeControler.postCreateCube)

router.get('/cubes/:cubeId/edit', cubeControler.getEditCube);
router.post('/cubes/:cubeId/edit', cubeControler.postEditCube);
router.get('/cubes/:cubeId/delete', cubeControler.getDeleteCube);

router.get('/cubes/:cubeId/details', cubeControler.getDetails)
router.get('/cubes/:cubeId/attach', cubeControler.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeControler.postAttachAccessory);



router.use('/accessories', accesorryControler);

module.exports = router;