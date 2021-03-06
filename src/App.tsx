import * as React from "react";
import './startPage.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import Home from './components/Home';
import About from './components/About1';
import Prize from './components/Prize';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
      //  <BrowserRouter>
      //   <div>
      //     <Navigation />
      //       <Switch>
      //        <Route path="/" component={Home} exact/>
      //        <Route path="/about" component={About}/>
              
      //       <Route component={Error}/>
      //      </Switch>

      //   </div> 
        
      // </BrowserRouter>
      <BrowserRouter>
     
      <div>
           <Navigation />
             <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path = "/prize" component={Prize}/>
            <Route component={Error}/>
           </Switch>

         </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
// const {useState} = React;
// export default function App () {
// const[counter, setCounter] = useState(0);
//   return (
//     <div className="page">
//     <div className="container">
//        <div className="child">
//    <p>{counter}</p>
  
//    <button className="increaseButton" onClick={()=>{
//      setCounter(counter+1);
//    }
     
//    }>spausk</button> 
//    </div>
   
//    </div>
  
//    </div>
//   );
// }
  
   





