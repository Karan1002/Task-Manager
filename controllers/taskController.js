const taskModel = require("../models/taskModel");
const getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskModel.find({});
    res.json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTasks = async (req, res) => {
  try {
    const taskData = await taskModel.create(req.body);
    res.json({ taskData });
  } catch (error) {}
};

const getTasks = async (req, res) => {
  try {
    const taskData = await taskModel.findOne({ _id: req.params._id }).exec();
    if (!taskData) {
      return res
        .status(404)
        .json({ msg: `no task id found ${req.params._id}` });
    }
    res.json({ taskData });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTasks = async (req, res) => {
  try {
    const taskData = await taskModel.findByIdAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!taskData) {
      return res
        .status(404)
        .json({ msg: `no task id found ${req.params._id}` });
    }
    res.json({ status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const taskData = await taskModel.findOneAndDelete({ _id: req.params._id });
    if (!taskData) {
      return res
        .status(404)
        .json({ msg: `no task id found ${req.params._id}` });
    }
    // res.json({taskData});
    // res.send();
    res.json({ taskData: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
