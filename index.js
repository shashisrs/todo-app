const express = require("express");
const app = express();

// load environment variables to process object
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// middleware to parse json request body
app.use(express.json());

// import routes for todo api
const todo = require("./routes/Todo");

// mount the todo api routes
app.use("/api/v1/", todo);

// start server
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", function (req, res) {
  res.send("<h1>It is Homepage</h1>");
});
