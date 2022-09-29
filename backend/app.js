const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//import routes
const productRouter = require("./routes/productRoute");

app.use("/api/v1", productRouter);

module.exports = app;
