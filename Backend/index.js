const express = require("express");
const app = express();
// env
require("dotenv").config();
const PORT = process.env.PORT;

// declare database
const database = require("./config/database");
// declare route
const routerAdmin = require("./api/v1/routes/admin/index.route");
const routerClient = require("./api/v1/routes/client/index.route");

// declare body parser
const bodyParser = require('body-parser');
// declare cors
const cors = require('cors');


// body parser
app.use(bodyParser.json());

// cors
app.use(cors({
    origin: "*",
    method: ["GET","POST","PATCH","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// router admin
routerAdmin(app);
// router client
routerClient(app);



// connect database
database.connect();

app.listen(PORT,() => console.log("App listen to port " + PORT));
