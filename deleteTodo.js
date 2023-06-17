const express = require('express');
const router = express.Router();

module.exports = (todos) => {
    // DELETE endpoint to delete a todo item
    router.delete('/', (req, res) => {
	const id = parseInt(req.body.id);

        // Find the index of the todo item with the provided ID
	const index = todos.findIndex((todo) => todo.id === id);

	// If the item is not found, return an error
	if (index === -1) {
            return res.status(404).send({ error: 'Todo not found' });
	}

	// Remove the item from the array
	todos.splice(index, 1);

	// Return the updated todo list
	res.send(todos);
	    
    });
    
    return router;

};
