import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation  from './component/Navigation';
import Dev  from './component/Dev';
import Login  from './component/Login';
import Register  from './component/register';
import Test  from './component/Test';
import Prod  from './component/Prod';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }
 


  componentDidMount () {
    console.log("called again componentDidMountdmain");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

 
 

  render() {

      var { isLoaded,items}= this.state;

      if (! isLoaded) {
        return <div> Loading...</div>;
      }

      else{
      
      return(
       
        <div >
                {/* <ul>
                  {items.map(item => (

                      <li key={item.id}>
                      Name:{item.name} || Email:{item.email} || username:{item.username}
                      </li>
                  
                  ))};
                </ul> */}

    <div className="hd">Todays Deployment (12 Midnight - Current)</div>
    <div className="main">


  <BrowserRouter>
  <div>
    <Navigation />

           {/*<Route path="/new" component= { NewRouterl } />  */}

        <Switch>
          <Route path="/" component= { Dev } exact /> 
          <Route path="/Login" component= { Login } /> 
          <Route path="/register" component= { Register } /> 
          <Route path="/Test" component= { Test } />
          <Route path="/Prod" component = { Prod } />
      
          </Switch>
              </div>
       </BrowserRouter>


    </div>
        </div>
       
      );
    }
    
  }
}


export default App;
