const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //empty obj get all of the data

    res.status(200).json({ tasks });

    // response options ===============
    //res.status(200).json({tasks, amount:tasks.lenght})

    // res
    //   .status(200)
    //   .json({ success: true, data: { tasks, nbHits: tasks.length } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// ====================  create  ============================
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
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

const updateTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// ======================  PUT  ==========================

const editTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// ====================  delete  ============================
const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
  editTask,
};
