
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { tenantDetailsInitialState } from "../helpers/InitialStates";
import Select from "../../components/customComponents/select/Select";


const UpdateTenants = () => {

  const [tenantDetails, setTenantDetails] = useState(tenantDetailsInitialState);



  const handleChange = ({ currentTarget: input }) => {
    let name = input.id;
    let value = input.value;

    setTenantDetails({
      ...tenantDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  const arrd = [
    {label:"skskskks",  value:"lkslksks"},
    {label:"skskskks",  value:"lkslksks"},
    {label:"skskskks",  value:"lkslksks"},
    {label:"skskskks",  value:"lkslksks"}

  ];
  return (
    <form onSubmit={handleSubmit}>
              <Form as={Row}>
               

              <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Property:</Form.Label>

                    
                    <Select
                     arrayData={arrd}
                     defaultSelectText="select "
                     onChange={handleChange}
                     
                     name="select"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Unit Name:</Form.Label>
                    <Select
                     arrayData={arrd}
                     defaultSelectText="select "
                     onChange={handleChange}
                     
                     name="select"
                    />
                  </Form.Group>
                </Col>
               
               
                

                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Enter First Name"
                      onChange={handleChange}
                      value={tenantDetails.first_name}
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Last Name:</Form.Label>
                    <Form.Control
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                      value={tenantDetails.last_name}
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="address">Id Number:</Form.Label>
                    <Form.Control
                      type="number"
                      id="id_number"
                      name="id_number"
                      onChange={handleChange}
                      value={tenantDetails.rent}
                      placeholder="Enter Id Number"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email Address:</Form.Label>
                    <Form.Control
                      type="text"
                      id="email_address"
                      name="email_address"
                      onChange={handleChange}
                      value={tenantDetails.email_address}
                      placeholder="Enter Email Address"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Phone Number:</Form.Label>
                    <Form.Control
                      type="number"
                      id="phone_number"
                      name="phone_number"
                      onChange={handleChange}
                      value={tenantDetails.phone_number}
                      placeholder="Enter Phone Number"
                    />
                  </Form.Group>
                </Col>

                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Emergency Names:</Form.Label>
                    <Form.Control
                      type="text"
                      id="emergency_names"
                      name="emergency_names"
                      placeholder="Enter Emergency Names"
                      onChange={handleChange}
                      value={tenantDetails.emergency_names}
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Emergency Relation:</Form.Label>
                    <Form.Control
                      type="text"
                      id="emergency_relation"
                      name="emergency_relation"
                      placeholder="Enter Emergency Relation"
                      onChange={handleChange}
                      value={tenantDetails.emergency_relation}
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Emergency Phone Number:</Form.Label>
                    <Form.Control
                      type="text"
                      id="emergency_phone_number"
                      name="emergency_phone_number"
                      placeholder="Enter Emergency Phone Number"
                      onChange={handleChange}
                      value={tenantDetails.emergency_phone_number}
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

export default UpdateTenants