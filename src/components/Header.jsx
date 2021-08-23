import React from 'react'
/*import logo_src from "my_to_do_listassets/images/logo_src.png";*/
import logo_src from "./assets/images/logo_src.png";
import "./Header.scss"
function Header() {
  return (
    <header className="header">

      <nav>
     
        <div className="logo">
          <img src={logo_src} alt="logo_src.png" id="logo" />
        </div>
        <h1>My Task List</h1>
      </nav>
    </header>
  )
}

export default Header
