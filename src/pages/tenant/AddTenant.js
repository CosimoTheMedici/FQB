import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";
import { tenantDetailsInitialState } from "../helpers/InitialStates";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";

const AddTenant = () => {
  const [tenantDetails, setTenantDetails] = useState(tenantDetailsInitialState);
  const [propertyArray, setPropertiesArray] = useState([]);
  const [unitArray, setUnitArray] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const dispatch = useDispatch();
  //const utilityChargesArray = useSelector((state) => state.utilityData.utilityData);
  //const utilityChargesArray = useSelector((state) => state);

  //console.log("utilityChargesArray   ",utilityChargesArray)


  useEffect(() => {
    
    fetchUnitArray();
    fetchPropertiesArray();
  
  }, [])

  async function fetchPropertiesArray() {
    try {
   

       const {data:responseData , status } = await axiosPrivate.get(`/estate/properties/view`);
       //const res= await axiosPrivate.get(`/estate/properties/view`);
       console.log("responseData",responseData.results)
       console.log("responseData keys",Object.keys(responseData.results[0]))
 

      if (status ==200 || status ==201) {
        //setProperties(data.results);
       const processedData = responseData.map((fetchedResponse, index) => {
        const {
         
          id,
          name,         
          
        } = fetchedResponse;
  
        return {
          name,id
        };
      });
      setPropertiesArray(processedData)
  
        console.log("processedData",processedData)
      } else {
        
        //setIsLoading(false);
        //errorNotification("Unable to fetch Biller list");
      }
    } catch (ex) {
      //setIsLoading(false);
      
      //errorNotification("Unable to fetch Biller list");
    }
  }
  async function fetchUnitArray() {
    try {
   

       const {data:responseData , status } = await axiosPrivate.get(`estate/classifications/view`);
       console.log("responseData",responseData.results)

       
 

      if (status ==200 || status ==201) {
        //setProperties(data.results);

        const processedData = responseData.map((fetchedResponse, index) => {
          const {
           
            id,
            name,         
            
          } = fetchedResponse;
    
          return {
            name,id
          };
        });

        setUnitArray(processedData)

        
      } else {
        //setIsLoading(false);
        //errorNotification("Unable to fetch Biller list");
      }
    } catch (ex) {
      //setIsLoading(false);
      
      //errorNotification("Unable to fetch Biller list");
    }
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();
   

    const { first_name, last_name, id_number, email_address, phone_number, emergency_phone_number, garbage_charge,emergency_relation,emergency_names } = tenantDetails;

    const check = [first_name, last_name, id_number, email_address,phone_number, emergency_phone_number, garbage_charge,emergency_relation,emergency_names].every(
      (value) => value
    );
    if (check === true) {
      const { user_id } = jwtDecode(auth.accessToken);

      let payload = {
        first_name: tenantDetails.first_name,
        last_name: tenantDetails.last_name,
        id_number: tenantDetails.id_number,
        email_address: tenantDetails.email_address,
        phone_number: tenantDetails.phone_number,
        emergency_phone_number: tenantDetails.emergency_phone_number,
        emergency_relation: tenantDetails.emergency_relation,
        emergency_names: tenantDetails.emergency_names,
        unit_id: 0,
        property_id: 0,
        created_by: user_id


      };
      console.log("payload", payload);

      try {
        const { status } = await axiosPrivate.post(
          "/estate/properties/add",
          payload
        );
        //console.log("createUnitsResponse", createUnitsResponse);
        //const { status } = createUnitsResponse;

        if (status === 201 || status === 200) {
          //console.log("added");
          successNotification("Tenant added successful");
          setTenantDetails(tenantDetailsInitialState);
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

    setTenantDetails({
      ...tenantDetails,
      [name]: value,
    });
  };


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
            <form onSubmit={handleSubmit}>
              <Form as={Row}>
               

              <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Property:</Form.Label>
                    <Form.Select
                      className=" form-select-mb mb-3"
                      aria-label=".form-select-mb example"
                    >
                      <option defaultValue="">Open this select menu</option>
                      <option defaultValue="1">One</option>
                      <option defaultValue="2">Two</option>
                      <option defaultValue="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm="12" lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Unit Name:</Form.Label>
                    <Form.Select
                      className=" form-select-mb mb-3"
                      aria-label=".form-select-mb example"
                    >
                      <option defaultValue="">Open this select menu</option>
                      <option defaultValue="1">One</option>
                      <option defaultValue="2">Two</option>
                      <option defaultValue="3">Three</option>
                    </Form.Select>
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AgentLayout(AddTenant);
