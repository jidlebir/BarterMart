import React from "react";
import {
  Card,
  CardText,
  CardHeader,
  CardTitle,
  CardBody,
  CardColumns,
} from "reactstrap";
// import Card from "react-bootstrap/Card";

const itemList = ({ items }) => {
  if (!items.length) {
    return <h3>There are no products to barter on yet!</h3>;
  }

  return (
    <div>
      {items &&
        items.map((item) => (
          <CardColumns>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card outline color="secondary" key={item._id}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <CardHeader>Title: {item.title}</CardHeader>
              <CardBody>
                <CardTitle>Item Offered: {item.offered}</CardTitle>
                <CardText>Price: {item.price}</CardText>
              </CardBody>
            </Card>
          </CardColumns>
        ))}
    </div>
  );
};

export default itemList;
