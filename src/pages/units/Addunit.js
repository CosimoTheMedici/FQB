import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";

const Addunit = () => {
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
                    placeholder="Enter email"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="mobile">Mobile:</Form.Label>
                  <Form.Control
                    type="text"
                    id="mobile"
                    placeholder="Enter mobile number"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="location">Location:</Form.Label>
                  <Form.Control
                    type="text"
                    id="location"
                    placeholder="Enter location"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="userId">User ID:</Form.Label>
                  <Form.Control
                    type="number"
                    id="userId"
                    placeholder="Enter user ID"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="owner">Owner ID:</Form.Label>
                  <Form.Control
                    type="number"
                    id="owner"
                    placeholder="Enter owner ID"
                  />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="active">Active:</Form.Label>
                  <Form.Check type="checkbox" id="active" label="Active" />
                </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="description">Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="description"
                    rows={3}
                    placeholder="Enter description"
                  />
                </Form.Group>
              </Col>
              <Col sm="12" lg="6">
                <Form.Group className="form-group">
                  <Form.Label htmlFor="pwd">Password:</Form.Label>
                  <Form.Control type="password" id="pwd" />
                </Form.Group>
              </Col>
              <div className="checkbox mb-3">
                <Form.Check className="form-check ">
                  <Form.Check.Input
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault3"
                  />
                  <Form.Check.Label htmlFor="flexCheckDefault3">
                    Remember me
                  </Form.Check.Label>
                </Form.Check>
              </div>
              <Button type="button" variant="btn btn-primary">
                Submit
              </Button>{" "}
              <Button type="button" variant="btn btn-danger">
                cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AgentLayout(Addunit);
