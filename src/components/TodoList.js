import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo, update } from '../actions'
import { getFilteredTodos } from "../utils/getFilteredTodos";
import React from 'react';
import Todo from './Todo';
import Checkbox from "./Checkbox";
import "./TodoList.css";
import EditTodo from "./EditTodo"
import FilterList from './filterList';
import itemsCalc from "../utils/itemsCalc";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, getSidebarval, showSidebar }) => {
    let completedCount = 0, incompletedCount = 0, overallCompletedCount = 0, overallIncompletedCount = 0;
    todos.filteredTodos.map(todo => ((todo.completed) ? completedCount++ : incompletedCount++));
    todos.todos.map(todo => ((todo.completed) ? overallCompletedCount++ : overallIncompletedCount++));

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

    const handleTodoClick = id => {
        todos.filteredTodos.map(todo => {
            if (id !== todo.id) {
                if (todo.editing) editTodo(todo.id);
            }
            return null;
        });
    }
    const handleSidebar = () => {
        if (showSidebar)
            getSidebarval(!showSidebar);
    }
    return (
        <div className="todolist-container" onClick={handleSidebar} style={{ opacity: showSidebar ? 0.4 : 1, overflow: showSidebar ? "hidden" : null }}>
            {todos.todos.length ?
                <React.Fragment>
                    <ul id="ul" className="ul" onClick={handleClick} style={{}}>
                        {todos.filteredTodos.map(todo => (
                            <div
                                id={todo.id}
                                text={todo.text}
                                className="todolist-items add-todo spanbutton draggable"
                                onClick={handleClick}
                                draggable={!showSidebar}
                            >
                                <Checkbox id={todo.id} checked={todo.completed} onClick={() => handleCheckboxClick(todo.id)} />
                                {todo.editing !== true ?
                                    <span className="todo-edit-range">
                                        <Todo id={todo.id} key={todo.id} {...todo}
                                            onDoubleClick={() => !showSidebar ? editTodo(todo.id) : null}
                                            onClick={() => !showSidebar ? handleTodoClick(todo.id) : null}
                                        />
                                        <button className="btn" onClick={() => !showSidebar ? deleteTodo(todo.id) : null}>&#10005;</button>
                                    </span>
                                    : <EditTodo key={todo.id} id={todo.id} placeholder={todo.text} />}
                            </div>
                        ))
                        }
                    </ul >
                    <div id="footer" className="add-todo footer-font footer-fix" onClick={handleClick}>
                        {itemsCalc(overallCompletedCount, completedCount, incompletedCount, todos.todos.length)}
                        <FilterList showSidebar={showSidebar} />
                        {completedCount !== 0 ?
                            (incompletedCount === 0 ?
                                <div id="clear-completed" className="clear-completed"
                                    onClick={() => !showSidebar ? (todos.filteredTodos.map(todo => (deleteTodo(todo.id)))) : null}>
                                    Clear Completed</div>
                                : <div id="clear-completed" className="clear-completed"
                                    onClick={() => !showSidebar ? (todos.filteredTodos.map(todo => (todo.completed ? deleteTodo(todo.id) : null))) : null}>
                                    Clear Completed</div>)
                            : null}
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