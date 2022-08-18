const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./DB/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
// app.get("/api/v1/tasks") => get all tasks
// get.post("/api/v1/tasks") => create task and add to the list
// app.get("/api/v1/tasks/:id") => get single task
// app.patch("/api/v1/tasks/:id") => update task
// app.delete("/api/v1/tasks/id") => delete task

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); // ensures connection to db before running the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
