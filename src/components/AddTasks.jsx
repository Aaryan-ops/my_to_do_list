import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css'
import dateFnsFormat from 'date-fns/format'
import { useState } from 'react';

const FORMAT="dd/mm/yyyy";
function formatDate(date,format,locale){
  return dateFnsFormat(date,format,{locale});
}
const AddTask=({onCancel,onAddTask})=>{
  const [task,setTask]=useState("");
  const [date,setDate]=useState(null);
  return(<div className="add-task-dialog">
  <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
  <div className="add-task-actions-container">
    <div className="btns-container">
      <button disabled={!task}  className="add-btn" onClick={()=>{onAddTask(task,date);onCancel();setTask("");}}>
  Add Task
      </button>
      <button className="cancel-btn" onClick={()=>{onCancel();setTask("")}}>Cancel </button>
    </div>
    <div className="DateContainer">
<DayPickerInput onDayChange={(x)=>setDate(x)} dayPickerProps={ {modifiers:{disabled:[{before:new Date()}]}}}/>
    </div>
  </div>
  </div>);
  }
  export default AddTask