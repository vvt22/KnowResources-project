require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const roadmapRoutes = require("./routes/roadmap");

// express app
const app = express();

// middleware
app.use(express.json()); //if has some data in body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/roadmap", roadmapRoutes);

//connect to db
mongoose
  .connect("mongodb://0.0.0.0:27017/roadmap")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(" connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
