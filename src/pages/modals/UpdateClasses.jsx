import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


const UpdateClasses = () => {
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
                      placeholder="Enter Unit Name"
                      onChange={handleChange}
                      value={unitsDetails.name}
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
                      value={unitsDetails.description}
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
  )
}

export default UpdateClasses