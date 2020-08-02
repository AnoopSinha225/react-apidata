import React from 'react';
import { NavLink }  from "react-router-dom";


const Navigation = () => {
    return(
  
  
    <div className="topnav">
 
  {/* <a class="active" href="#">Dev</a>
  <a href="#news">Login</a>
  <a href="#contact">Test</a>
  <a href="#about">Prod</a> */}


  
  <NavLink className="active"  to = "/">Dev</NavLink>
  <NavLink to = "/Login">Login</NavLink>
  <NavLink to = "/Test">Test</NavLink>
  <NavLink to = "/Prod">Prod</NavLink>

  </div>

    );
  };


  export default Navigation;