import React, {Component} from 'react';
import qs from 'querystring';
import axios from 'axios';

export class SignUp extends Component{
    handleChangeNumber = (event) =>{
        this.setState({email:event.target.value});
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
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput"
                               placeholder="WeChat"/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="formGroupExampleInput2"
                               placeholder="Number"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="formGroupExampleInput"
                               placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="formGroupExampleInput2"
                               placeholder="Confirm Password"/>
                        </div>
                    <input type="submit" value="submit"/>
                </form>
        );

    }
}

export default SignUp;