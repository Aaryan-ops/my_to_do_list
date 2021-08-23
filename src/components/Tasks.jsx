import React,{useState} from 'react';
import AddTask from './AddTasks';
import dateFnsFormat from 'date-fns/format'

const X={

  INBOX:"My tasks",
  TODAY:"Today's tasks",
  FUTURE:"Future tasks"
};

function Tasks({tab}) {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([]);
  const addNewTask=(text,date)=>{
    const newItem={text,date:date || new Date()};
    /*setTasks([...tasks,text]);*/
    /* setTasks((r)=>[...r,text])*/

    setTasks([...tasks,newItem]);
  }
  return (
    <div className="tasks">
      <h1>{X[tab]}</h1>
      <div className="add-task-btn" onClick={()=>setShowAddTask(!showAddTask)}>
        <span className="plus">+</span>
        <span className="add-task-text">Add New Task</span>
      </div>
     {showAddTask && <AddTask onAddTask={addNewTask} onCancel={()=>setShowAddTask(false)} />}
     <h3>

       {tasks.length>0?tasks.map(task=>(<p>{task.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="print">{dateFnsFormat(new Date(task.date),"dd")}</span></p>)):<p>No Tasks</p>}
     </h3>
    </div>
  )
}

export default Tasks
