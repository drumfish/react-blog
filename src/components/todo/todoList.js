import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, updateTodo} from '../../actions/todoActions';
import Menu from "../menu";
import '../../scss/src/components/todo_list.scss';


class TodoList extends Component {

  componentWillMount() {
    this.props.fetchTodos();
  }

  toggleComplete = (todo) => {
    todo.completed = !todo.completed;
    this.props.updateTodo(todo);
  };

  render() {
    return (
      <div className={'App'}>
        <Menu/>
        {this.props.todos.map(todo =>
          <div key={todo.id} className={'todo_list_item'}>
            <input
              type="checkbox"
              name="todo_checkbox"
              id={'todo_checkbox' + todo.id}
              className={'todo_checkbox'}
              defaultChecked={todo.completed}
              onClick={() => this.toggleComplete(todo)}
            />
            <label className={'todo_label'} htmlFor={'todo_checkbox' + todo.id}>
            {todo.title}
          </label>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.items,
});

export default connect(mapStateToProps, {fetchTodos, updateTodo})(TodoList);
