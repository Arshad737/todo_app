const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const port = process.env.PORT || 3001;
// array to hold all the To DO Items
let toDoList = [];

// middleware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//creating new To Do
app.post('/todos/', (req, res) => {
  const toDo = req.body;
  let id;
  if (toDo.title && toDo.body) {
    id = toDoList.length + 1;
    toDoList.push({
      ...toDo,

      id: id
    });

    res.status(200).json({ status: 'success', id: id });
  } else {
    res.status(422).json({});
  }
});

//Gets the list of all to do
app.get('/todos/', (req, res) => {
  res.status(200).send(toDoList);
});

//gets the to do by Id
app.get('/todos/:id', (req, res) => {
  let searchparam = req.params.id.toLowerCase();
  let toDos;
  //searching besed on ID
  if (!toDos) {
    toDos = toDoList.find(_toDo => _toDo.id === +searchparam);
  }
  //searching based on Title
  if (!toDos) {
    toDos = toDoList.find(_toDo => _toDo.title.toLowerCase() == searchparam);
  }
  //searching based on body
  if (!toDos) {
    toDos = toDoList.find(_toDo =>
      _toDo.body.toLowerCase().includes(searchparam)
    );
  }
  //If searching was successful
  if (toDos) {
    res.status(200).send(toDos);
  } else {
    res.status(204).json({});
  }
});

//Endpoint to delete a To Do list
app.delete('/todos/:id', (req, res) => {
  const toDoId = req.params.id;

  // filter list copy, by excluding item to delete
  const filtered_list = toDoList.filter(toDo => toDo.id !== +toDoId);

  // replace old list with new one
  toDoList = filtered_list;

  res.json({ status: 'success', id: toDoId });
});

//Starting the server
app.listen(port, () => {
  console.log(`running at port ${port}`);
});
