import React, {Component} from 'react';
import qs from 'querystring';
import axios from 'axios';
import ('./styles/signin.css')

export class Signin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number:'',
            password:''
        }
    }

    handleChangeNumber = (event) =>{
        this.setState({number:event.target.value});
    };

    handleChangePassword= (event) =>{

        this.setState({password:event.target.value});
    };

    handleSubmit = async (event) =>{
        axios.post('/authenticateUser', this.state)
            .then(response=>{
                if(!response.data.process){
                    this.props.history.push('/userInterface');
                }else{
                    alert("authentication failed")
                }
            })
            .catch(err =>{
                console.log(err);
            });
        console.log("here");
    };

    directSignup = (event) => {
        window.location.href="/?#/signUp";
    }

    render(){
        return(
            <div className="main">
                <div className="main_body">
                    <h1>
                        Login
                    </h1>
                    <form onSubmit={this.handleSubmit} className="signinForm">
                        <input type="text" className="signinFormInput" placeholder="number" onChange={this.handleChangeNumber}/>
                        <input type="password" className="signinFormInput" placeholder="password" onChange={this.handleChangePassword}/>
                        <br></br>
                        <div className="buttons">
                            <input type="submit" className="btn login" value="login" />
                            <button onClick={this.directSignup} className="btn reg">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );

    }
}

export default Signin;