const express = require('express');

const config = require("./config");
const setupViewEngine = require("./config/viewEngine");

//Directly involed function 
//require('./config/viewEngine')(app);

const app = express();
setupViewEngine(app);

app.use(express.static("src/public"))


app.get("/", (req,res) =>{
    res.render('home', {layout: false})
});

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
})