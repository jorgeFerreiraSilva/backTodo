const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);

Todo.before("delete", function (req, res, next) {
  res.status(200).json({ id: req.params.id });
  next(); // Don't forget to call next!
});

Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
