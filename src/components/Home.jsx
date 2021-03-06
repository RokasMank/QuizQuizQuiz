import React from 'react';
import { NavLink } from 'react-router-dom';
const home = () => {
    return (
      
        <div className="homePage">
        <div className="greeting">Greetings!
        <br></br>
        <span>Start the quiz!</span>
        </div>
        <div className="homeBox">
        <div className="homeContainer">
           <div className="homeChild">

         <NavLink className="navL" to="/about">Quiz</NavLink>
      </div>
      
      </div>
      </div>
      </div>
    );
}
 
export default home;