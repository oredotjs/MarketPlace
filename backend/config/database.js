const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const connect = () =>
  mongoose
    .connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: "MarketPLace",
    })
    .then((con) => {
      console.log(`DB connection successful ${con.connection.host}`);
    });

module.exports = connect;
