// Dotenv setup
require("dotenv").config();

// Major server imports
const express = require("express");
const server = express();
const dbConnect = require("./database/dbConnect");

// API Route Imports
const userRouter = require("./routes/user");

// Server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// server.use(express.static("public"));

// Invoking API Routes
server.use("/healthspan/api/user", userRouter);

// Dynamic Port logic for production and development use
const port = process.env.PORT || 3000;

// API Home Page
server.get("/healthspan/api/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HealthSpan API</title>
  </head>
  <body>
    <h1>Welcome to HealthSpan API for Developers</h1>
    <a href="/healthspan/api/"><button>Proceed</button></a>
  </body>
</html>
`);
});

// Server startup logic
const startServer = async () => {
  try {
    // DB was setup in such a way that if the DB does not connect due to anykind of issue, the server will not run.
    await dbConnect(process.env.MONGO_URI);
    server.listen(port, () => {
      console.log(`Server runnning on port localhost:${port}`);
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

startServer();
