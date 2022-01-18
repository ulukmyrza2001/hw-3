import React, { useState } from 'react'
import List from './List'

const Inputform = () => {
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState({
		fname: '',
		lname: '',
		email: '',
	})
	const AddTaskHandler = (e) => {
		const name = e.target.name
		setTask({
			...task,
			[name]: e.target.value,
		})
	}
	const onAddHandler = (e) => {
		e.preventDefault()
		// const newTask = task;
		setTasks([...tasks, task])
	}
	console.log(tasks)

	return (
		<div>
			<form onSubmit={onAddHandler}>
				<div>
					<label>First name</label>
					<input
						name='fname'
						type='text'
						className='fname'
						onChange={AddTaskHandler}
						value={task.fname}
					/>
				</div>
				<div>
					<label>Last name</label>
					<input
						name='lname'
						type='text'
						className='lname'
						onChange={AddTaskHandler}
						value={task.lname}
					/>
				</div>
				<div>
					<label htmlFor=''>Email</label>
					<input
						name='email'
						type='text'
						className='email'
						onChange={AddTaskHandler}
						value={task.email}
					/>
				</div>

				<button type='submit' className='add'>
					Add
				</button>
			</form>
            <List data = {tasks}/>
		</div>
	)
}

export default Inputform
