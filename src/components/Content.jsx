import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Mainbar from './Mainbar';

function Content() {
  const [tab,setTab] = useState("My tasks");
  return (
    <div>

     
      <section className="content">

       
        <Mainbar tab={tab} />
     
      </section>
    </div>
  )
}

export default Content
