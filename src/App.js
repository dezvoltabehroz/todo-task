import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="container" >
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;
