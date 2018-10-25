import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Clothes from "./pages/Clothes";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";

class App extends Component {

  render(){
    return(
      <div>
    <Router>
      <div>
        <Navbar />
          <Route exact path="/UserInventory" component={Clothes} />
          <Route exact path="/AddItem" component={AddItem} />
      </div>
    </Router>
  </div>
     )
    }
}

export default App;
