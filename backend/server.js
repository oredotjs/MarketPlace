const app = require("./app");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

connectDb();

const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
