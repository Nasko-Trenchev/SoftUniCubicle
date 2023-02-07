const express = require('express');
const cookieParser = require('cookie-parser');

const config = require("./config");
const errorHandler = require('./middlewares/errorHandleMiddleware');
const authMiddleware = require('./middlewares/authMiddleware')
const setupViewEngine = require("./config/viewEngine");
const routs = require("./routes");
const initDatabase = require("./config/databaseInit");


const app = express();

setupViewEngine(app);

app.use(express.static("src/public"))
app.use(cookieParser());
app.use(express.urlencoded({extended : false}));
app.use(authMiddleware.authentication);
app.use(routs);
app.use(errorHandler);

initDatabase()
.then(app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
}))
.catch((err) => console.log(err.message));
