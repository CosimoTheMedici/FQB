import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";
import { classificationDetailsInitialState } from "../helpers/InitialStates";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";

const AddClassifications = () => {
  const [classDetails, setClassDetails] = useState(classificationDetailsInitialState);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();


  // {
  //   "name": "string",
  //   "description": "string",
  //   "created_by": 0
  // }



  
  const handleSubmit = async (event) => {
    event.preventDefault();


    const {  name,description } = classDetails;

    const check = [name,description].every(
      (value) => value
    );
    if (check === true) {
      const { user_id } = jwtDecode(auth.accessToken);

      let payload = {
        name: classDetails.name,
        description: classDetails.description,
        created_by: user_id
      };
      console.log("payload", payload);

      // try {
      //   const { status } = await axiosInstance.post(
      //     "/estate/properties/add",
      //     payload
      //   );
      //   //console.log("createUnitsResponse", createUnitsResponse);
      //   //const { status } = createUnitsResponse;

      //   if (status === 201 || status === 200) {
      //     //console.log("added");
      //     successNotification("Property added successful");
      //     setUnitsDetails(unitsDetailsInitialState);
      //   } else {
      //     errorNotification("something went wrong");
      //   }
      // } catch (ex) {
      //   console.log({ ex });
      //   errorNotification("Error:something went wrong");
      // }
    } else if (check === false) {
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    let name = input.id;
    let value = input.value;

    setClassDetails({
      ...classDetails,
      [name]: value,
    });
  };


  return (
    <Row>
      <Col sm="12" lg="12">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Add Unit Classes</h4>
            </div>
          </Card.Header>
          <Card.Body>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vulputate, ex ac venenatis mollis, diam nibh finibus leo
            </p> */}
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AgentLayout(AddClassifications);
