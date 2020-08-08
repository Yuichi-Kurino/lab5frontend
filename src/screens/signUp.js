import React, {Component} from 'react';
import qs from 'querystring';
import axios from 'axios';
import "./styles/signup.css";


export class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number:'',
            password:''
        }
    }

    handleInsertNumber = (event) =>{
        this.setState({number:event.target.value});
    };

    handleInsertPassword= (event) =>{

        this.setState({password:event.target.value});
    };

    handleSubmit = async (event) =>{

        axios.post('/userSignup', this.state)
            .then(response=>{
                if(!response.data.process){
                    this.props.history.push('/userInterface');
                }else{
                    alert("Sign Up failed")
                }
            })
            .catch(err =>{
                console.log(err);
            });
        console.log("here");
    };

    directSignin = (event) => {
        window.location.href="/signin";
    }

    render(){
        return(
            <div className="main">
                <div className="main_body">
                    <h1>
                            Sign Up
                    </h1>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="number" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Number" onChange={this.handleInsertNumber}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="formGroupExampleInput"
                                       placeholder="Password" onChange={this.handleInsertPassword}/>
                            </div>
                            <input type="submit" value="register" className="reg_button"/>
                        </form>
                    </div>
                    <button onClick={this.directSignin} className="btn btn-link">Sign In</button>
                </div>
            </div>
        );

    }
}

export default SignUp;