import React, {Component} from 'react';
import axios from 'axios';

export class UserInterface extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr:[]
        }
    }

    componentDidMount() {
        axios.get('/userInterface')
            .then(response=> {
                this.setState({arr: response.data});
                console.log();
            })
            .catch(err =>{
                console.log(err);
            });
    }

    directAddItem = (event) => {
        window.location.href="/?#/addItem";
    }

    directEditItem = (event) => {
        window.location.href="/?#/editItem";
    }

    render(){
        if(this.state.arr.process){
            return(
                <div>
                    not logged in
                </div>
            );
        }else{
            return(
                <div>
                    <div>
                        {this.state.arr.map(element=>{
                            console.log()
                            return(<div>{JSON.stringify(element)}</div>);
                        })
                        }
                    </div>
                    <button onClick={this.directAddItem} className="btn btn-link">Add Item</button>
                    <button onClick={this.directEditItem} className="btn btn-link">Edit Item</button>
                </div>
            )
        }


    }
}

export default UserInterface;