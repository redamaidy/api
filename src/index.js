const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/datos");
var cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", userRoute);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});
mongoose
  .connect("mongodb+srv://edgar:MONGOPASS@cluster0.lkyswoc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
