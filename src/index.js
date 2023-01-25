const express = require('express');

const config = require("./config");
const setupViewEngine = require("./config/viewEngine");
const cubeControler = require("./controlers/cubeControler")

const routs = require("./routes");

//Directly involed function 
//require('./config/viewEngine')(app);

const app = express();
setupViewEngine(app);

app.use(express.static("src/public"))
app.use(routs);


app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
})