import React, { Component } from "react";
import "./Navbar.css";
import FacebookLoginButton from "../FacebookLoginButton";

class Navbar extends Component {

state = {
    username: null
};
    
      onFacebookLogin = (loginStatus, resultObject) => {
        console.log("fb login function");
        if (loginStatus === true) {
          this.setState({
            username: resultObject.user.name
          });
        } else {
          alert('Facebook login error');
        }
      };

    render(){
        const { username } = this.state;
        return(
            <nav>
            <div className="nav-wrapper teal accent-4">
        
              <a href="/UserInventory" className="brand-logo right">Inventory</a>
                <ul id="nav-mobile" className="left hide-on-small-only ">
                    <li><a className="waves-effect waves-light btn" href="/UserInventory">Inventory</a></li>
                    <li><a className="waves-effect waves-light btn" href="/AddItem">Add Item</a></li>
                    <li>
                        <div className="App-intro">
                        { !username &&
                            <FacebookLoginButton onLogin={this.onFacebookLogin}>
                                <button className="waves-effect waves-light btn">FACEBOOK LOGIN</button>
                            </FacebookLoginButton>
                        }
                        {username &&
                            <p>Welcome back, {username}</p>
                        }
                        </div>
                    </li>
                </ul>
                <a href=

            </div>
          </nav>
        )
    }
}

export default Navbar;