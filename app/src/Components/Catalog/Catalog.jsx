import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CardImg from "react-bootstrap/esm/CardImg";
import Row from "react-bootstrap/Row";
import productImage from "../../Images/product.png";
import store from "../../store/store";

const Catalog = () => {
  return (
    <div>
      <Row xs={1} sm={2} md={3}>
        {store.map((i, index) => {
          return (
            <Col key={index}>
              <Card bg="dark">
                <Card.Body>
                  <CardImg src={productImage} style={{ width: "100px" }} />
                  <Card.Title>{i.name}</Card.Title>
                  <Card.Text>{i.label}</Card.Text>
                  <Card.Title>
                    Price: {i.price}
                    <Button variant="outline-primary">Add to cart</Button>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Catalog;
