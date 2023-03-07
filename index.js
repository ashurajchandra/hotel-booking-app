const express = require("express");
const app = express();
const PORT = 8080;

const routes = require("./routes");
app.use("/",routes)
app.listen(PORT, (req,res)=>{console.log("app is up and listening on port",PORT)})