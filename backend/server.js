const app = require("./app");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

connectDb();

const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV;

const server = app.listen(port, () => {
  console.log(`server running on ${port}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  server.close(() => {
    process.exit(1);
  });
});
