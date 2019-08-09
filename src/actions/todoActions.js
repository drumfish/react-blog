import {FETCH_TODOS, NEW_TODO, TOGGLE_COMPLETE_TODO} from "./types";

export const fetchTodos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(res => res.json())
    .then(todos => dispatch({
      type: FETCH_TODOS,
      payload: todos
    }))
};

export const addTodo = (todoItem) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    body: JSON.stringify(todoItem),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(todo => dispatch({
      type: NEW_TODO,
      payload: todo
    }))
};



export const updateTodo = (todoItem) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos/' + todoItem.id,{
    method: 'PUT',
    body: JSON.stringify(todoItem),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(todo => dispatch({
      type: TOGGLE_COMPLETE_TODO,
      payload: todo
    }))
};
