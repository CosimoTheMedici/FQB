import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";
import { propertiesDetailsInitialState } from "../helpers/InitialStates";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddProperties = () => {
  const [propertiesDetails, setPropertiesDetails] = useState(
    propertiesDetailsInitialState
  );
  const axiosInstance = useAxiosPrivate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("unitDetails--->", unitDetails);

    const { name, address, email, mobile, location, description } =
      propertiesDetails;

    const check = [name, address, email, mobile, location, description].every((value) => value);
    if (check === true) {
      let payload = {
        unit_name: unitDetails.unit_name,
      };

      try {
        const createUnitsResponse = await axiosInstance.post(
          "api/v1/units/create",
          payload
        );
        console.log("createUnitsResponse", createUnitsResponse);
        const { status } = createUnitsResponse;

        if (status === 201) {
          console.log("added");
          successNotification("Unit added successful");
          setUnitDetails(unitDetailsInitialState);
        } else {
          errorNotification("something went wrong");
        }
      } catch (ex) {
        console.log({ ex });
        errorNotification("Error:something went wrong");
      }
    } else if (check === false) {
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    let name = input.id;
    let value = input.value;

    setPropertiesDetails({
      ...propertiesDetails,
      [name]: value,
    });
  };
  return (
    <Row>
      <Col sm="12" lg="12">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Add Properties</h4>
            </div>
          </Card.Header>
          <Card.Body>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vulputate, ex ac venenatis mollis, diam nibh finibus leo
            </p> */}
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
                  <Col sm="4" lg="4">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="mobile">Phone:</Form.Label>
                      <Form.Control
                        type="number"
                        id="mobile"
                        name="mobile"
                        onChange={handleChange}
                        value={propertiesDetails.mobile}
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="8" lg="8">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="mobile">Mobile:</Form.Label>
                      <Form.Control
                        type="number"
                        id="mobile"
                        name="mobile"
                        onChange={handleChange}
                        value={propertiesDetails.mobile}
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
                  <Button type="button" variant="btn btn-primary">
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AgentLayout(AddProperties);
