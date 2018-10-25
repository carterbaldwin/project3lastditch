import React, { Component } from "react";
import "./AddItem.css";
import axios from "axios";

class AddItem extends Component {
    state = {
        type: "",
        name: "",
        link: "",
        bookData: {}
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
        return(
            <div className="addItem-main">
            <div className="container">
           
                <div className="addItem-wrapper">
                <div className="addItem-header">
                    <h1 className="addItem-text">Add Item</h1>
                </div>
            <form className="addItem-form">
            <label htmlFor="itemName">Item Name</label>
            <input
                type="text"
                name="type"
                placeholder="name the item"
                value={this.state.type}
                onChange={this.handleInputChange}
            />
            <label htmlFor="itemType">item type</label>
            <input
                type="text"
                name="name"
                placeholder="[pants,shoes,hat,etc]"
                value={this.state.name}
                onChange={this.handleInputChange}
            />
            <label htmlFor="itemLink">Link to product</label>
            <input
                type="text"
                name="link"
                placeholder="html link to item"
                value={this.state.link}
                onChange={this.handleInputChange}
            />
          
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

