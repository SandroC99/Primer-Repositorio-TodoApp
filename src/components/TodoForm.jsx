import React, { useState, useEffect, useRef } from 'react';
import { Task } from './Task';
import '../css/TodoForm.css';
import { v4 as uuidv4 } from 'uuid';

const ini = () => {
	let info = localStorage.getItem('list_local');
	if (Boolean(info)) {
		return JSON.parse(info);
	}
	return [];
};

export const TodoForm = () => {
	const [input, setInput] = useState('');
	const [list, setList] = useState(ini);
	const ref_Input = useRef();

	useEffect(() => {
		localStorage.setItem('list_local', JSON.stringify(list));
	}, [list]);

	const HANDLE_CHANGE = (e) => {
		setInput(e.target.value);
	};

	const ADD_TASK = (e) => {
		e.preventDefault();

		if (input === '') {
			alert('Ingrese una Tarea para agregar');
			return;
		}

		const newTask = {
			id: uuidv4(),
			text: input,
			complete: false,
		};
		setList([...list, newTask]);
		setInput('');
		ref_Input.current.value = '';
	};

	const UPDATE_FUN = (id) => {
		let updList = list.map((task) => {
			if (task.id === id) {
				task.complete = !task.complete;
			}
			return task;
		});
		setList(updList);
	};
	const DELETE_FUN = (id) => {
		let newList = list.filter((task) => task.id !== id);
		setList(newList);
	};

	return (
		<>
			<div className='todo_container'>
				<h1>Todo-Task</h1>
				<form action='' className='todo_form'>
					<input ref={ref_Input} type='text' onChange={HANDLE_CHANGE} />
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
