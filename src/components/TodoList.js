import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo, update } from '../actions'
import { getFilteredTodos } from "./getFilteredTodos";
import React from 'react';
import Todo from './Todo';
import Checkbox from "./Checkbox";
import "./TodoList.css";
import EditTodo from "./EditTodo"
import FilterList from './filterList';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {

    let completedCount = 0;
    todos.filteredTodos.map(todo => ((!todo.completed) ? completedCount++ : null));

    const handleClick = e => {
        todos.filteredTodos.map(todo => (todo.editing ? editTodo(todo.id) : null));
    }

    const handleCheckboxClick = id => {
        todos.filteredTodos.map(todo => {
            if (id === todo.id) toggleTodo(todo.id);
            if (todo.editing) editTodo(todo.id);
            return null;
        });
    }

    return (
        <div className="todolist-container">
            {todos.todos.length ?
                <React.Fragment>
                    <ul onClick={handleClick}>
                        {todos.filteredTodos.map(todo => (
                            <span className="todolist-items add-todo spanbutton" onClick={handleClick}>
                                <Checkbox id={todo.id} checked={todo.completed} onClick={() => handleCheckboxClick(todo.id)} />
                                {todo.editing !== true ?
                                    <span className="todo-edit-range">
                                        <Todo key={todo.id} {...todo}
                                            onClick={() => editTodo(todo.id)}
                                        />
                                        <button className="btn" onClick={() => deleteTodo(todo.id)}>&#10005;</button>
                                    </span>
                                    : <EditTodo key={todo.id} id={todo.id} placeholder={todo.text} />}
                            </span>
                        ))
                        }
                    </ul >
                    <div className="add-todo footer-font footer-fix" onClick={handleClick}>
                        <div className="completed-count" > {completedCount} {completedCount > 1 ? " items left" : " item left"}</div>
                        <FilterList />
                        {completedCount === 0 ?
                            <div className="clear-completed"
                                onClick={() => (todos.filteredTodos.map(todo => (deleteTodo(todo.id))))}>
                                Clear Completed</div> : null}
                    </div>
                </React.Fragment> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: getFilteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    update: (id, text) => dispatch(update(id, text))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)