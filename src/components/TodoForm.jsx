import React from 'react';
import { Task } from './Task';
import '../css/TodoForm.css';

export const TodoForm = () => {
	return (
		<>
			<div className='todo_container'>
				<form action='' className='todo_form'>
					<input type='text' />
					<button>Agregar</button>
				</form>
				<div className='todo_list'>
					<ul className='list'>
						<Task />
					</ul>
				</div>
			</div>
		</>
	);
};
