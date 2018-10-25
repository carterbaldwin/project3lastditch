import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Clothes extends Component {
  state = {
    clothes: []
  };

  componentDidMount() {
    this.loadClothes();
  }

  loadClothes = () => {
    API.getClothes()
      .then(res => this.setState({ clothes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Clothing Should I Wear?</h1>
            </Jumbotron>
            <form>
              <Input name="type" placeholder="type of clothing" />
              <Input name="name" placeholder="name of clothing" />
              <TextArea name="link" placeholder="link to clothing" />
              <FormBtn>Submit Clothing</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Clothes On My List</h1>
            </Jumbotron>
            {this.state.clothes.length ? (
              <List>
                {this.state.clothes.map(book => (
                  <ListItem key={clothes._id}>
                    <a href={"/clothes/" + clothes._id}>
                      <strong>
                        {clothes.name} by {clothes.type}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Clothes;
