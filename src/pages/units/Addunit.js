import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";
import { unitsDetailsInitialState } from "../helpers/InitialStates";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Addunit = () => {

  const [unitsDetails, setUnitsDetails] = useState(unitsDetailsInitialState);
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
  // property_id: 0,
  // rent: 0,
  // classification_id: 0,
  // name: "",
  // water_charge: 0,
  // kplc_charge: 0,
  // garbage_charge: 0,
  // description: "",
  // occupied: 0,
  // status: 0,
  // created_by: 0,

  return (
    <Row>
      <Col sm="12" lg="12">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Add Units</h4>
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
