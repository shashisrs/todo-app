const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.Database_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.error(err);
      console.log("Error connecting to Database");
      process.exit(1);
    });
};
module.exports = dbConnect;