import React, {Component} from 'react';
import qs from 'querystring';
import axios from 'axios';

export class Signin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr:[]
        }
    }

    componentDidMount() {
        axios.get('/userInterface')
            .then(response=> {
                this.setState({arr: response.data})
                console.log();
            })
            .catch(err =>{
                console.log(err);
            });
    }


    render(){
        if(this.state.add.process){
            return(
                <div>
                    notloggedin
                </div>
            );
        }else{
            return(
                <div>
                    {this.state.arr.map(element=>{
                        return(<span>{JSON.stringify(element)}</span>)
                    })
                    }
                </div>
            );
        }


    }
}

export default Signin;