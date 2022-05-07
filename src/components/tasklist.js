const TaskList = ({tasks,deleteTask}) => {
    
    return ( 
        <div className="mt-3">
            <h3 className="text-secondary">Tasks</h3>
            {tasks.length === 0 && <h2 className="mt-5 text-secondary">It seems you don't have any task :(</h2>}
            {tasks.map((task)=> 
            <div className="my-3 bg-light p-3 rounded" key={task.id}>
                <div className="row" key={task.id}>
                    <div className="col-10" key={task.id}>
                        <h4 className="text-secondary" key={task.id}>{task.title}</h4>
                    </div>
                    <div className="col-2">
                        <button className='btn btn-danger' key={task.id} onClick={()=>deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            </div> )}
        </div>
     );
}
 
export default TaskList;