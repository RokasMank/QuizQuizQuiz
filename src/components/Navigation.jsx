import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="nav">
          <NavLink className="navL" to="/">Home</NavLink>
          <NavLink className="navL" to="/about">Quiz</NavLink>
          <NavLink className="navL" to="/prize" hidden>Prize</NavLink>
          
       </div>
    );
}
 
export default Navigation;