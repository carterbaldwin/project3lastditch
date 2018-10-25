import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid"; 
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

import AddBtn from "../../components/AddBtn";
import Mannequin from "../../components/images/2dmannequin.png";
import Dress from "../../components/images/dress.png";
import Hat from "../../components/images/hat.png";
import Pants from "../../components/images/pants.png";
import Shirt from "../../components/images/shirt.png";
import Shoes from "../../components/images/shoes.png";

import "./Clothes.css";




class Clothes extends Component {
  state = {
    clothes: [],
    bodyWear: "",
    hat: "",
    shoes: "",
    pants: "",
    shirt: "",

  };

  componentDidMount() {
    this.loadClothes();
  }

  loadClothes = () => {
    API.getClothes()
      .then(res => this.setState({ clothes: res.data }))
      .catch(err => console.log(err));
  };

 

  updateMannequin = (type) => {

    if (type==="full body" || type==="dress" || type==="jumpsuit"){
      this.setState({bodyWear: Dress})
      this.setState({shirt: ""})
      this.setState({pants: ""})      
    }
    if (type==="shoes"){
      this.setState({shoes: Shoes})
    }
    if (type==="hat"){
      this.setState({hat: Hat})
    }
    if (type==="bottom" || type==="pants"){
      this.setState({pants: Pants})
      this.setState({bodyWear: ""})

    }
    if (type==="top" || type==="shirt"){
      this.setState({shirt: Shirt})
      this.setState({bodyWear: ""})

    }
    console.log(type)

  }

  removeItem = (type) => {

    if (type==="full body" || type==="dress" || type==="jumpsuit"){
      this.setState({bodyWear: ""})
    }
    if (type==="shoes"){
      this.setState({shoes: ""})
    }
    if (type==="hat"){
      this.setState({hat: ""})
    }
    if (type==="bottom" || type==="pants"){
      this.setState({pants: ""})
    }
    if (type==="top" || type==="shirt"){
      this.setState({shirt: ""})

    }

  }

  render() {
    return (
      <Container fluid>
        <Row>
         
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Clothes On My List</h1>
            </Jumbotron>



        

            {this.state.clothes.length ? (
              <List>
                {this.state.clothes.map(clothes => (
                  <ListItem key={clothes.type}>
                    {/* <a href={"/clothes/" + clothes._id}> */}
                    
                    <ul onClick ={ () => this.updateMannequin(clothes.type)}><AddBtn /></ul>

                    <a href={clothes.link}>
                      <strong>
                        <ul><h5>
                        {clothes.name}
                        </h5></ul>
                        {/* <ul>
                        <a href={clothes.link}/>
                        </ul> */}
                      </strong>
                    </a>
                    <ul onClick ={ () => this.removeItem(clothes.type)}><DeleteBtn /></ul>
                  </ListItem>
                ))}   
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

          <Col size="md-6">
            <Jumbotron>
              <h1>What Clothing Should I Wear?</h1>
            </Jumbotron>
            <form>
              {/* <ul> <img src= {Mannequin} /></ul> */}

              <div class="parent">
                <img class="image1" src={Mannequin} />
                {/* {this.state.type}? */}
                <img class="image2" src={this.state.bodyWear} />
                <img class="image2" src={this.state.hat} />
                <img class="image2" src={this.state.shoes} />
                
                <img class="image2" src={this.state.pants} />
                <img class="image2" src={this.state.shirt} />


              </div>
              
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Clothes;
  