const connectDB = require("./database/connect");
const express = require("express");
const app = express();
const TaskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

// middeleware
app.use(express.static("./public"));
app.use(express.json());

//route

// app.get("/hello", (req, res) => {
//   res.send("Task Manger");
// });

app.use("/api/v1/tasks", TaskRoutes);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
