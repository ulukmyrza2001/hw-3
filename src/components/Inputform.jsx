import React, { useState } from 'react'
import List from './List'
import './ImputForm.css'

const Inputform = () => {
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState({
		fname: '',
		lname: '',
		email: '',
	})
	const addDataHandler = (e) => {
		const name = e.target.name
		setTask((prevState) => {
			return {
				...prevState,
				[name]: e.target.value,
			}
		})
	}
	const onAddHandler = (e) => {
		e.preventDefault()
		setTasks([...tasks, task])
	}

	return (
		<div>
			<div className='center'>
				<form onSubmit={onAddHandler}>
					<h1>Our Newsletter</h1>
					<div className='inputbox'>
						<input
							name='fname'
							type='text'
							className='fname'
							required='required'
							onChange={addDataHandler}
							value={task.fname}
						/>
						<span>First name</span>
					</div>
					<div className='inputbox'>
						<input
							name='lname'
							type='text'
							className='lname'
							required='required'
							onChange={addDataHandler}
							value={task.lname}
						/>
						<span>Last name</span>
					</div>
					<div className='inputbox'>
						<input
							name='email'
							type='text'
							className='email'
							required='required'
							onChange={addDataHandler}
							value={task.email}
						/>
						<span>Email</span>
					</div>
					<div className='inputbox'>
						<input type='submit' value='submit' />
					</div>
				</form>
			</div>
			<List data={tasks} />
		</div>
	)
}

export default Inputform
