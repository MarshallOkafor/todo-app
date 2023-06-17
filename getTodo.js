module.exports = (todos) => {
    const express = require('express');
    const router = express.Router();
    // GET endpoint to retrieve all todo items
    router.get('/', (req, res) => {
      res.send(todos);
    });
    return router;
  }; 