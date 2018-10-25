import React from "react";
import "./AddBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AddBtn = props => (
  <span className="add-btn" {...props}>
    <h4>+</h4>
  </span>
);
 
export default AddBtn;
