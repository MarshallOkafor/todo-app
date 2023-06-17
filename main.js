const express = require('express');
const app = express();
const port = 3000;

// Define the todos array
let todos = [];

// Body parsing middleware
app.use(express.json());

// Import the todos router and pass the todos array as a parameter
const addTodo = require('./addTodo')(todos);
const deleteTodo = require('./deleteTodo')(todos);
const markedDoneTodo = require('./markedDoneTodo')(todos);
const getTodo = require('./getTodo')(todos);
const modifytodo = require('./modifytodo')(todos);

// Use the todos router for all requests to /todos
app.use('/', addTodo);
app.use('/', deleteTodo);
app.use('/done',markedDoneTodo);
app.use('/', modifytodo);
app.use('/', markedDoneTodo);
app.use('/', getTodo);

// Start the server
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});