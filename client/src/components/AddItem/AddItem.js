import React, { Component } from "react";
import "./AddItem.css";
import axios from "axios";
import { Link, Redirect} from "react-router-dom";

class AddItem extends Component {
    state = {
        type: "",
        name: "",
        link: "",
        bookData: {},
        trigger: false
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            type: this.state.type,
            name: this.state.name,
            link: this.state.link,
            trigger: true,
            bookData: {
            type: this.state.type,
            name: this.state.name,
            link: this.state.link,
            }
        });
        
        axios.post("/api/clothes", {

            
            type: this.state.type,
            name: this.state.name,
            link: this.state.link
            
           
        }).then(response => {
            console.log("sent to back");
        });
    }

    render(){
        if(this.state.trigger === true ){
            return <Redirect to="/UserInventory" />
        }
        return(
            <div className="addItem-main">
            <div className="container">
           
                <div className="addItem-wrapper">
                <div className="addItem-header">
                    <h1 className="addItem-text">Add Item</h1>
                </div>
            <form className="addItem-form">
            <input
                type="text"
                name="name"
                placeholder="name the item"
                value={this.state.name}
                onChange={this.handleInputChange}
            />
            <label htmlFor="itemName">Item Name</label>
            <input
                type="text"
                name="type"
                placeholder="[pants, shoes, hat, etc]"
                value={this.state.type}
                onChange={this.handleInputChange}
            />
            <label htmlFor="itemType">Item Type</label>
            <input
                type="text"
                name="link"
                placeholder="html link to item"
                value={this.state.link}
                onChange={this.handleInputChange}
            />
            <label htmlFor="itemLink">Link to Product</label>
            <div className="btnHolder">
                <button 
                className="submitBtn"
                onClick={this.handleSubmit}
                type="submit" 
                >SUBMIT</button> 
            </div>
            </form>
            </div>
            </div>    
        </div> 
        )
    }
}

export default AddItem;

