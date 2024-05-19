
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { unitsDetailsInitialState } from "../helpers/InitialStates";
import Select from "../../components/customComponents/select/Select";

const UpdateUnits = () => {
  const [unitsDetails, setUnitsDetails] = useState(unitsDetailsInitialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
  }


  const handleChange = ({ currentTarget: input }) => {
    let name = input.id;
    let value = input.value;

    setUnitsDetails({
      ...unitsDetails,
      [name]: value,
    });
  };

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
                     defaultSelectText="select"
                     onChange={handleChange}
                     
                     name="select"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Unit Type:</Form.Label>
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
                    <Form.Label htmlFor="address">Rent Amount:</Form.Label>
                    <Form.Control
                      type="number"
                      id="rent"
                      name="rent"
                      onChange={handleChange}
                      value={unitsDetails.rent}
                      placeholder="Enter Rent Amount"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Water Charge:</Form.Label>
                    <Form.Control
                      type="text"
                      id="water_charge"
                      name="water_charge"
                      onChange={handleChange}
                      value={unitsDetails.water_charge}
                      placeholder="Enter Water Charge"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Stima Charge:</Form.Label>
                    <Form.Control
                      type="text"
                      id="kplc_charge"
                      name="kplc_charge"
                      onChange={handleChange}
                      value={unitsDetails.kplc_charge}
                      placeholder="Enter Stima Charge"
                    />
                  </Form.Group>
                </Col>

                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Garbage Charge:</Form.Label>
                    <Form.Control
                      type="text"
                      id="garbage_charge"
                      name="garbage_charge"
                      onChange={handleChange}
                      value={unitsDetails.garbage_charge}
                      placeholder="Enter Garbage Charge"
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

export default UpdateUnits