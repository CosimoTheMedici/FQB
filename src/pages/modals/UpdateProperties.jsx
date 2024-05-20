import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { propertiesDetailsInitialState } from "../helpers/InitialStates";

const UpdateProperties = () => {
  const [propertiesDetails, setPropertiesDetails] = useState(
    propertiesDetailsInitialState
  );

  const handleChange = ({ currentTarget: input }) => {
    let name = input.id;
    let value = input.value;

    setClassDetails({
      ...classDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form as={Row}>
        <Col sm="12" lg="6">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
              value={propertiesDetails.name}
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
              onChange={handleChange}
              value={propertiesDetails.address}
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
              onChange={handleChange}
              value={propertiesDetails.email}
              placeholder="Enter email"
            />
          </Form.Group>
        </Col>
        <Col sm="12" lg="6">
          <Row>
            <Col sm="2" lg="2">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mobile">Code:</Form.Label>
                <Form.Control
                  type="number"
                  id="mobile"
                  name="mobile"
                  //onChange={handleChange}
                  value={254}
                  placeholder="Enter phone number"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col sm="10" lg="10">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mobile">Phone:712345678</Form.Label>
                <Form.Control
                  type="number"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  value={propertiesDetails.phone}
                  placeholder="712345678"
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
              onChange={handleChange}
              value={propertiesDetails.location}
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
              onChange={handleChange}
              value={propertiesDetails.description}
              rows={3}
              placeholder="Enter description"
            />
          </Form.Group>
        </Col>
        <Row>
          <Col sm="6" lg="6">
            <Button type="submit" variant="btn btn-primary">
              Submit
            </Button>
          </Col>
          <Col sm="6" lg="6">
            <Button type="button" variant="btn btn-danger">
              cancel
            </Button>
          </Col>
        </Row>{" "}
      </Form>
    </form>
  );
};

export default UpdateProperties;
