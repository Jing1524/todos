const Task = require("../models/task");

//middleware
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); //empty obj get all of the data
  res.status(200).json({ tasks });

  // response options ===============
  //res.status(200).json({tasks, amount:tasks.lenght})

  // res
  //   .status(200)
  //   .json({ success: true, data: { tasks, nbHits: tasks.length } });
});
// ====================  create  ============================
const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
// ======================  get single  ==========================

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// =====================  patch  ===========================

const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({});
});
// ======================  PUT  ==========================

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true, // overwrite the existing data
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({});
});

// ====================  delete  ============================
const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
  editTask,
};
