import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './todo';
import LoginScreen from './login';
import ProtectedRoute from './routing/ProtectedRoute'

const App = () => {
	return (
		<Router>
			<main className='container content'>
				<Routes>
					<Route path='/' element={<LoginScreen />} />
					<Route element={<ProtectedRoute />}>
						<Route path='/todo' element={<Todo />} />
					</Route>
				</Routes>
			</main>
		</Router>
	);
};

export default App;
