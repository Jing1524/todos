const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("todo todo todos lalalalalalal");
});

// app.get("/api/v1/tasks") => get all tasks
// get.post("/api/v1/tasks") => create task and add to the list
// app.get("/api/v1/tasks/:id") => get single task
// app.put("/api/v1/tasks/:id") => update task
// app.delete("/api/v1/tasks/id") => delete task

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
