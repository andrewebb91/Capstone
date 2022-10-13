// 'Import' the Express module instead of http
const {application} = require("express");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const tops = require("./routers/tops");

dotenv.config();

mongoose.connect(process.env.MONGODB);
// Initialize the Express application
const app = express();
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

//middleware
app.use(cors);
app.use(express.json());
app.use(logging);
// Handle the request with HTTP GET method from http://localhost:4040/status
app
  .get("/status", (request, response) => {
    // Create the headers for response by default 200
    // Create the response body
    // End and return the response
    response.send(JSON.stringify({message: "Service healthy"}));
  })
  .post((request, response) => {
    response.json({requestBody: request.body});
  });

app.use("/tops", tops);

const PORT = process.env.API_PORT || 4040;
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
