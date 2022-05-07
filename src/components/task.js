import { useState } from "react";
import TaskList from "./tasklist";

const Task = () => {

    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState('');

    const handleInput = (event) =>{
        setTitle(event.target.value);
    }

    const addTask = () => {
        if (title !== ''){
            let id = tasks.length + 1;
            let tasks_cpy = [...tasks];
            tasks_cpy.push({id: id,title: title})
            setTasks(tasks_cpy);
            setTitle('');
        }
    }

    const deleteTask = (id) =>{
        let task_cpy = tasks.filter(task => task.id !== id);
        console.log(task_cpy);
        setTasks(task_cpy);
    }

    return ( 
        <div className="w-50 mt-5 mx-auto">
            <h2 className="mx-auto text-secondary">Add New Task</h2>
            <div className="row">
                <div className="col-8">
                    <input type="text" className="form-control" value={title} onChange={handleInput}/>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary col" onClick={addTask}>Add</button>
                </div>
            </div>
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
            
        </div>
     );
}
 
export default Task;