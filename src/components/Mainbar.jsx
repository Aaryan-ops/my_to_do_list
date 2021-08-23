import React from 'react'
import Tasks from './Tasks'
import {useState} from 'react'

function Mainbar() {
  const [tab,setTab]=useState("My Tasks")
  return (
    <div className="mainbar">
      <Tasks  tab={tab} />
    </div>
  )
}

export default Mainbar
