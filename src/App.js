import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Signin from "./screens/signin"
import UserInterface from "./screens/userInterface";

function App() {

  return (
      <div className="App">
        <Route path="/" exact render = {(props) =><Signin {...props}/>}/>
          <Route path="/userInterface" exact render = {(props) =><UserInterface {...props}/>}/>
      </div>
  );
}

export default App;
