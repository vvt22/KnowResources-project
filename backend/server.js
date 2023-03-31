require("dotenv").config();
const express = require("express");
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

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
