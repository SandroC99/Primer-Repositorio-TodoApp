import React from 'react';
import '../css/Task.css';

export const Task = ({ id, complete, task, updateFun, deleteFun }) => {
	return (
		<li
			className={`task ${complete ? 'complete' : ''}`.trim()}
			onClick={() => updateFun(id)}
		>
			<span>{task}</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					deleteFun(id);
				}}
			>
				Eliminar
			</button>
		</li>
	);
};
