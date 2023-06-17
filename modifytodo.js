var express = require('express');
var router = express.Router();

module.exports = (todos) => {
// PUT route to modify a to-do item
router.put('/', (req, res) => {
  const id = parseInt(req.body.id);
  console.log(id)

  const reqBody = req.body;

  // Find the to-do item in the array
  const index = todos.findIndex(todo => todo.id === id);

  // If the item doesn't exist, return an error
  if (index === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  // Update the item with the new values
  // use || to keep the existing value if the new value is not provided
  todos[index].state = reqBody.state || todos[index].state;
  todos[index].desc = reqBody.desc || todos[index].desc;

  // Return the updated to-do item
  res.json(todos[index]);
});
return router;
}