import React, {useState} from 'react'

export default function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('')
    const [taskPriority, setTaskPriority] = useState(0)


    function addTask() {
        const newTask = {
            name: taskName,
            priority: taskPriority
        }
        const orderedTasks =  [...tasks, newTask].sort((a,b) => b.priority - a.priority) 
        setTasks(orderedTasks)
        setTaskName('')
        setTaskPriority(0)
    }


    function addTaskName(e) {
        setTaskName(e.target.value)
    }

    function addTaskPriority(e){
        setTaskPriority(Number(e.target.value))
    }

    function removeTask(idx){
        setTasks(prevTasks => prevTasks.filter((task, i) => i!== idx))

    }
    return(<>
        <div id="todo-app"> 
            <div id="todo-block">
                <h2>ToDo</h2>
                <div id="todo-items-block">
                    {tasks.sort((a,b) => a.taskPriority - b.taskPrioritity).map((task,idx) => <div className="task-list-item" key={idx}>{task.name} | {task.priority}  <i className="fa fa-trash-o" onClick={() => removeTask(idx)}></i></div> )}
                </div>
            </div>
            <div id="add-task-block">
                    <input type="text" name="task" id="task-name" placeholder='Task description'value={taskName} onChange={addTaskName}/><br />
                    <input type="number" name="priority" id="task-prio" placeholder='Task priority' value={taskPriority} onChange={addTaskPriority}/><br />
                    <button id="add-task-button" onClick={addTask} disabled={() => document.getElementById('task-name').value == '' || document.getElementById("task-name") === null ? "disabled" : "enabled"}>Add Task</button>
            </div>
    </div>
        </>);
}