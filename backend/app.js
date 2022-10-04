const express = require("express");
const morgan = require("morgan");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//import routes
const productRouter = require("./routes/productRoute");

app.use("/api/v1", productRouter);
//Error Middleware
app.use(errorMiddleware);
module.exports = app;
