require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const resourceRoutes = require("./routes/resource");

// express app
const app = express();

// middleware
app.use(express.json()); //if has some data in body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/resources", resourceRoutes);

//connect to db
mongoose
  .connect("mongodb://0.0.0.0:27017/resourcesdb")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(" connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
