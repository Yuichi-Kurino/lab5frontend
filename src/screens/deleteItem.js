import React, {Component} from 'react';
import axios from 'axios';
import "./styles/signup.css";


export class DeleteItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pid:''
        }
    }

    handledeleteItem = (event) =>{
        this.setState({pid:event.target.value});
    };

    handleSubmit = async (event) =>{
        console.log(this.state);
        axios.post('/delete', this.state)
            .then(response=>{
                if(!response.data.process.fail){
                    this.props.history.push('/userInterface');
                }else{
                    alert("delete item failed")
                }
            })
            .catch(err =>{
                console.log(err);
            });
        console.log("here");
    };

    directUserInterface = (event) => {
        window.location.href="/userInterface";
    }

    render(){
        return(
            <div className="main">
                <div className="main_body">
                    <h1>
                        Delete Item
                    </h1>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="uid" className="form-control" id="formGroupExampleInput2"
                                       placeholder="pid" onChange={this.handledeleteItem}/>
                            </div>
                            <input type="submit" value="delete item" className="reg_button"/>
                        </form>
                    </div>
                    <button onClick={this.directUserInterface} className="btn btn-link">Submit</button>
                </div>
            </div>
        );

    }
}

export default DeleteItem;