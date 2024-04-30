import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";

const AddProperties = () => {

  // email: "",
  // mobile: "",
  // location: "",
  // user_id: 0,
  // owner: 0,
  // active: true,
  // description: "",
  return (
    <Row>
      <Col sm="12" lg="12">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Basic Form</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vulputate, ex ac venenatis mollis, diam nibh finibus leo
            </p>
            <Form as={Row}>
              <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name:</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="address">Address:</Form.Label>
                  <Form.Control
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter address"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email address:</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Row>
                <Col sm="4" lg="4">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="mobile">Mobile:</Form.Label>
                  <Form.Control
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </Form.Group>
                </Col>
                <Col sm="8" lg="8">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="mobile">Mobile:</Form.Label>
                  <Form.Control
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </Form.Group>
                </Col>
                </Row>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="location">Location:</Form.Label>
                  <Form.Control
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter location"
                  />
                </Form.Group>
                </Col>
               
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="description">Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="Enter description"
                  />
                </Form.Group>
              </Col>

              <Row>
                <Col sm="6" lg="6">
                <Button type="button" variant="btn btn-primary">
                Submit
              </Button>
                </Col>
                <Col sm="6" lg="6">
                <Button type="button" variant="btn btn-danger">
                cancel
              </Button>
                </Col>
                </Row>
            
             {" "}
              
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AgentLayout(AddProperties);
