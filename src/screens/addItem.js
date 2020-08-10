import React, {Component} from 'react';
import axios from 'axios';
import "./styles/signup.css";


export class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:''
        }
    }

    handleInsertItem = (event) =>{
        this.setState({itemInfo:event.target.value});
    };
    handleSubmit = async (event) =>{

        axios.post('/create_order', this.state)
            .then(response=>{
                if(!response.data.process){
                    this.props.history.push('/addItem');
                }else{
                    alert("add item failed")
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
                        Sign Up
                    </h1>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="itemInfo" className="form-control" id="formGroupExampleInput2"
                                       placeholder="item info" onChange={this.handleInsertItem}/>
                            </div>
                            <input type="submit" value="register" className="reg_button"/>
                        </form>
                    </div>
                    <button onClick={this.directUserInterface} className="btn btn-link">Submit</button>
                </div>
            </div>
        );

    }
}

export default AddItem;