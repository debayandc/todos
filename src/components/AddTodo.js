import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleCompleted, editTodo } from '../actions';
import { getFilteredTodos } from "./getFilteredTodos";
import "../App.css";

const AddTodo = ({ dispatch, todos }) => {
    let input, count = 0;
    let id = (todos.todos.length === undefined) ? 0 : todos.todos.length;
    const handleSubmit = event => {
        event.preventDefault()
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo(id, input.value))
        input.value = ''
        id = 0;
    }
    const handleClick = e => {
        e.preventDefault();
        todos.todos.map(todo => (todo.completed ? count++ : ""));
        if (count < todos.todos.length) {
            todos.todos.map(todo => {
                if (!todo.completed) {
                    return dispatch(toggleCompleted(todo.id))
                }
                return "";
            })
        }
        if (count === todos.todos.length) {
            todos.todos.map(todo => {
                if (todo.completed) {
                    return dispatch(toggleCompleted(todo.id))
                }
                return "";
            })
        }
    }

    const handleClickNoEdit = e => {
        e.preventDefault();
        todos.todos.map(todo => (todo.editing ? dispatch(editTodo(todo.id)) : null));
    }

    return (
        <div id="add-todo-sticky" className="add-todo-sticky" onClick={handleClickNoEdit}>
            <div id="todo-header" className="todo-header">todos</div>
            <div id="add-todo" className="add-todo">
                <button id="toggle-all" className="toggle-all" onClick={handleClick}>&#8250;</button>
                <form id="form" className="form" onSubmit={event => handleSubmit(event)} >
                    <input
                        autoComplete="off"
                        id="form-input"
                        className="input-no-style input-override form"
                        required
                        type="text"
                        placeholder="What needs to be done"
                        ref={node => (input = node)} />
                </form>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    todos: getFilteredTodos(state.todos, state.filter)
})

export default connect(mapStateToProps)(AddTodo)