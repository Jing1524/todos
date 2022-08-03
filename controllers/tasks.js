const getAllTasks = (req, res) => {
  res.send("get all tasks lalalalalallalalal");
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json(req.params.id);
};

const updateTasks = (req, res) => {
  res.send("update the task wahhhhhhhhhhhhhhh");
};
const deleteTasks = (req, res) => {
  res.send("delete a task ahhhhhhhhhhhhhhh");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
};
