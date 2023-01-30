const express = require('express');

const config = require("./config");
const setupViewEngine = require("./config/viewEngine");
const routs = require("./routes");
const initDatabase = require("./config/databaseInit");

//Directly involed function 
//require('./config/viewEngine')(app);

const app = express();

setupViewEngine(app);

app.use(express.static("src/public"))
app.use(express.urlencoded({extended : false}));
app.use(routs);

initDatabase()
.then(app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
}))
.catch((err) => console.log(err.message));
