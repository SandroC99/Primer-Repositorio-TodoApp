import React, { useState } from 'react';
import { Task } from './Task';
import '../css/TodoForm.css';
import { v4 as uuidv4 } from 'uuid';

export const TodoForm = () => {
	const [input, setInput] = useState('');
	const [list, setList] = useState([]);

	const HANDLE_CHANGE = (e) => {
		setInput(e.target.value);
	};
	const ADD_TASK = (e) => {
		e.preventDefault();
		const newTask = {
			id: uuidv4(),
			text: input,
			complete: false,
		};
		setList([...list, newTask]);
	};

	const UPDATE_FUN = (id) => {
		console.log('update');
		let updList = list.map((task) => {
			if (task.id === id) {
				task.complete = !task.complete;
			}
			return task;
		});
		setList(updList);
	};
	const DELETE_FUN = (id) => {
		console.log('delete');
		let newList = list.filter((task) => task.id !== id);
		setList(newList);
	};

	return (
		<>
			<div className='todo_container'>
				<form action='' className='todo_form'>
					<input type='text' onChange={HANDLE_CHANGE} />
					<button onClick={ADD_TASK}>Agregar</button>
				</form>
				<div className='todo_list'>
					<ul className='list'>
						{list.map((task) => {
							return (
								<Task
									id={task.id}
									key={task.id}
									complete={task.complete}
									task={task.text}
									updateFun={UPDATE_FUN}
									deleteFun={DELETE_FUN}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};
