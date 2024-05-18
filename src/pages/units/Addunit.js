import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../components/Card";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";
import { unitsDetailsInitialState } from "../helpers/InitialStates";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { errorNotification, successNotification } from "../../utilities/notification";
import Select from "../../components/customComponents/select/Select";
import { Layout } from "../../layouts/mainlayout/Layout";

const Addunit = () => {
  const [unitsDetails, setUnitsDetails] = useState(unitsDetailsInitialState);
  const [propertyArray, setPropertiesArray] = useState([]);
  const [classificationArray, setClassificationArray] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const dispatch = useDispatch();
  //const utilityChargesArray = useSelector((state) => state.utilityData.utilityData);
  //const utilityChargesArray = useSelector((state) => state);

  //console.log("utilityChargesArray   ",utilityChargesArray)


  useEffect(() => {
    
    fetchClassificationsArray();
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
  async function fetchClassificationsArray() {
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

        setClassificationArray(processedData)

        
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


    const { property_id, rent, classification_id, name, water_charge, kplc_charge, garbage_charge,description } = unitsDetails;

    const check = [property_id, rent, classification_id, name, water_charge, kplc_charge, garbage_charge,description].every(
      (value) => value
    );
    if (check === true) {
      const { user_id } = jwtDecode(auth.accessToken);

      let payload = {
        property_id: unitsDetails.property_id,
        rent: unitsDetails.rent,
        classification_id: unitsDetails,
        name: unitsDetails.name,
        water_charge: unitsDetails.water_charge,
        kplc_charge: unitsDetails.kplc_charge,
        garbage_charge: unitsDetails.garbage_charge,
        description: unitsDetails.description,
        occupied: 0,
        status: 0,
        created_by: user_id
      };
      console.log("payload", payload);

      try {
        const { status } = await axiosPrivate.post(
          "/estate/properties/add",
          payload
        );
        

        if (status === 201 || status === 200) {
          //console.log("added");
          successNotification("Unit added successful");
          setUnitsDetails(unitsDetailsInitialState);
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Layout(Addunit);
