const express = require("express");
const router = express.Router();
const app = express();
const {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController");

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:_id").get(getTasks).patch(updateTasks).delete(deleteTasks);
module.exports = router;
