import React, {Component} from "react";
import "./AddBtn.css";





class AddBtn extends Component {
state={
  hatTrig: false,
  fullbodyTrig: false,
  
}

handleSubmit = e => {
  e.preventDefault();
  console.log("working")
}
render() {
  return(

    <div className="btnHolder">
    <button 
    className="submitBtn"
    onClick={this.handleSubmit}
    type="submit" 
    >Add to Mannequin</button> 
   </div>

  );
}

}
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AddBtn = props => (
  <span className="add-btn" {...props}>
    <h4>+</h4>
  </span>
);
 
export default AddBtn;
