import React,{ useState } from 'react'

const Inputform = () => {
    const [task,setTask] = useState('')
    const [tasks,setTasks] = useState('')
    const AddTaskHandler = (e) =>{
       setTask(e.target.value)
    }
    const onAddHandler = (e) =>{
        e.preventDefault()
        // const newTask = task;
        setTasks([...tasks,task])
    }
    console.log(tasks);
	return <form onSubmit={onAddHandler} >
        <input type="text" className="tasks" onChange={AddTaskHandler} value={task} />
        <button type='submit' className="add">Add</button>
        <ul>
            {setTasks(tasks.map(el=>{
                return(
                    <li>{el}</li>
                )
            }))}
        </ul>
    </form>
}

export default Inputform
