const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/note-keeping-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
