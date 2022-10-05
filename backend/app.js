const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(express.json());
app.use(morgan("dev"));

//import routes
const productRouter = require("./routes/productRoute");
const authRouter = require("./routes/authRoute");

app.use("/api/v1", productRouter);
app.use("/api/v1", authRouter);
//Error Middleware
app.use(errorMiddleware);
module.exports = app;
