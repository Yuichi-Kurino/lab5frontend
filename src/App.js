import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Signin from "./screens/signin"
import UserInterface from "./screens/userInterface";
import SignUp from "./screens/signUp";

function App() {

  return (
      <div className="App">
        <Route path="/" exact render = {(props) =><Signin {...props}/>}/>
        <Route path="/userInterface" exact render = {(props) =><UserInterface {...props}/>}/>
        <Route path="/signUp" exact render = {(props) =><SignUp {...props}/>}/>
      </div>
  );
}

export default App;
