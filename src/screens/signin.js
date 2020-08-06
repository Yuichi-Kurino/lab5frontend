import React, {Component} from 'react';
import qs from 'querystring';
import axios from 'axios';

export class Signin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleChangeNumber = (event =>{
        console.log(event.target);
        this.setState({email:event.target.value});
    })

    handleChangePassword= (event =>{

        this.setState({password:event.target.value});
    })

    handleSubmit = async (event) =>{

        // console.log(qs.stringify(this.state));
        // const response = await fetch('https://lab5redo8-4-20.herokuapp.com/authenticateUser',{
        //     method:'POST',
        //     headers:{
        //         'Content_Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        //     },
        //     mode:'no-cors',
        //     body:qs.stringify(this.state)
        // });
        // const str = await response.text();
        // console.log(this.state);
        // console.log(JSON.parse(str));

        axios.post('/authenticateUser', this.state)
            .then(response=>{
                console.log(response);
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