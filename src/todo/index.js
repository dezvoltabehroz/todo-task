import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <div className="container" >
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Todo;
