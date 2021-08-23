import React from 'react';
/*import {FaInbox,FaRegCalenderAlt,FaRegCalender} from "react-icons/fa";
/*<FaInbox className="icon" />*/

function Sidebar({tab,setTab}) {
  return (
    <div className="sidebar">
      <div onClick={()=>setTab("My")}><h2>All Tasks</h2></div>
      <div onClick={()=>setTab("Today")}><h2>Today's tasks</h2></div>
      <div onClick={()=>setTab("Future")}><h2>Future tasks</h2></div>
    </div>
  )
}

export default Sidebar
