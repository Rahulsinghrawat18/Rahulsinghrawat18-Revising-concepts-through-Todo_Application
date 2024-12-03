const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require("cors");
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    req.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
  //put it in mongoDB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false 
  })

  res.json({
    msg: "Todo Created"
  })  
})

app.get('/todos', async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos
  })
})

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success) {
    req.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
  //update it in mongoDB
  await todo.update({   //here update function has two things
     _id: req.body.id //id of todo u want to update (_id is part of syntax)
  }, {
      completed: true // what to want to do with the todo with the specific id  
  })

  res.json({
    msg: "Todo marked as completed"
  })
})

app.listen(3000)