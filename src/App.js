import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Signin from "./screens/signin"
import UserInterface from "./screens/userInterface";
import SignUp from "./screens/signUp";
import AddItem from "./screens/addItem";

function App() {

    return (
        <div className="App">
            <Route path="/" exact render = {(props) =><Signin {...props}/>}/>
            <Route path="/userInterface" exact render = {(props) =><UserInterface {...props}/>}/>
            <Route path="/signUp" exact render = {(props) =><SignUp {...props}/>}/>
            <Route path="/addItem" exact render = {(props) =><AddItem {...props}/>}/>
        </div>
    );
}

export default App;
