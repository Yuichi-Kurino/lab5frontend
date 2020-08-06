import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Signin from "./screens/signin"

function App() {

  return (
      <div className="App">
        <Route path="/" exact render = {(props) =><Signin {...props}/>}/>
      </div>
  );
}

export default App;
