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
 
export default AddBtn;
