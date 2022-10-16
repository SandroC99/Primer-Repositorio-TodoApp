import React from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';

export const App = () => {
	return (
		<>
			<div className='App'>
                <h2>Un Todo Random</h2>
				<TodoForm />
			</div>
		</>
	);
};
