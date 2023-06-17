const express = require('express');
const router = express.Router();

module.exports = (todos) => {
    let idCounter = 1;
    // POST endpoint to add a todo item
    router.post('/', (req, res) => {
    const todo = req.body;

	// Generate a new ID for the todo item
	todo.id = idCounter++;

    // Add the new todo item to the array passed as a parameter
    todos.push(todo);

    // Return the updated todo list
    res.send(todos);
    });

    return router;
};
