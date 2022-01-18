import React, { useState } from 'react'
import List from './List'
import './InputForm.css'

const Inputform = () => {
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
	const [tasks, setTasks] = useState([])
	const addFnameHandler = (e) => {
		setFname(e.target.value)
	}
	const addLnameHandler = (e) => {
		setLname(e.target.value)
	}
	const addEmailHandler = (e) => {
		setEmail(e.target.value)
	}
	const onAddHandler = (e) => {
		e.preventDefault()
		const newData = {
			fname: fname,
			lname: lname,
			email: email,
		}
		// const newTask = task;
		setTasks([...tasks, newData])
        console.log(tasks);
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
							onChange={addFnameHandler}
							value={fname}
						/>
						<span>First name</span>
					</div>
					<div className='inputbox'>
						<input
							name='lname'
							type='text'
							className='lname'
							required='required'
							onChange={addLnameHandler}
							value={lname}
						/>
						<span>Last name</span>
					</div>
					<div className='inputbox'>
						<input
							name='email'
							type='text'
							className='email'
							required='required'
							onChange={addEmailHandler}
							value={email}
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
