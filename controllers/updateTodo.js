const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id=req.params.id;
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateTodo: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Updated successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
