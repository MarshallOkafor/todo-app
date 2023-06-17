const express = require('express');
const router = express.Router();


// POST endpoint to mark a todo item as complete
module.exports = (todos) => {
    router.post('/', (req, res) => {
        const id = parseInt(req.body.id);
        const index = todos.findIndex((todo) => todo.id === id);
        
        if (index === -1) {
            // Update the done value of the todo to true
            return res.json({success: false, message: `The todo item with ID ${id} is not found `}); 
        }
        todos[index].state = true;
        //res.json({success: true, message: `The todo item with ID ${id} has been marked as done`});

        res.send(todos);
        
        // Return success response
        //res.json({success: true, message: `The todo item with ID ${id} has been marked as doene`});
    });

    return router;
};
