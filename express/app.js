const express = require("express");
// const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");
const getRoute = require("./route/router")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

    app.use('/',getRoute);
 


app.listen(8000, () =>
  console.log("listning to port 8000 ....")
);
