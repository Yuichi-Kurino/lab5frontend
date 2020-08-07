import React, {Component} from 'react';
import qs from 'querystring';
import axios from 'axios';

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

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="signinForm">
                <input type="text" className="signinFormInput" placeholder="number" onChange={this.handleChangeNumber}/>
                <input type="password" className="signinFormInput" placeholder="password" onChange={this.handleChangePassword}/>
                <input type="submit" value="submit"/>
            </form>

        );

    }
}

export default Signin;