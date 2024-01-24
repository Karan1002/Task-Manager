const express = require("express");
const app = express();
const TaskRoutes = require("./routes/taskRoutes");

// middeleware

app.use(express.json());

//route

app.get("/hello", (req, res) => {
  res.send("Task Manger");
});

app.use("/api/v1/tasks", TaskRoutes);
const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}`));
