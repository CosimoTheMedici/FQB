import React, { useState, useEffect } from "react";
import { Row, Col, Table, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import TableComponent, { TableComponent2 } from "../../components/customComponents/table/Table";
import AgentLayout from "../../layouts/mainlayout/AgentLayout";
import { FaEllipsisVertical } from "react-icons/fa6";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import {Button, Modal, Nav, Tab} from 'react-bootstrap'
import { Data_table,Header_table } from "../../utilities/data";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { fetchProperties } from "../../redux/propertiesActions";








const AgentOwnerUnits = () => {
  const [show, setShow] = useState(false);
  const [properties, setProperties] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const axiosPrivate = useAxiosPrivate();
  //const dispatch = useDispatch();
  //const utilityData = useSelector(state => state); // Adapt this selector to your Redux state structure
  //console.log("utilityData",utilityData)


  // useEffect(() => {
  //   // Dispatch both fetchTenants and fetchProperties actions
  //   //dispatch(fetchProperties(axiosPrivate));
  //   dispatch(fetchUtilityData(axiosPrivate));
  // }, [dispatch]);

  async function fetchProperties() {
    try {
     // setIsLoading(true);
      // const { dataRes: fetchBillerResponse } = await getBillers({
      //   limit: 1000000,
      //   offset: 0,
      // });

       const {data , status } = await axiosPrivate.get(`/estate/properties/view`);
       console.log("fetchPropertiesResponses",data.results.length)
       //if (Array.isArray(data.results)) {
        // let results = Object.values(data.results);
        // console.log("fetchPropertiesResponses results",typeof results)
        // console.log("fetchPropertiesResponses", Array.isArray(data.results))
   
      //const fetchTenantsResponses = await fetch("http://50.17.75.252:8000/estate/properties/view", {
     // const fetchTenantsResponses = await fetch("http://50.17.75.252:8000/estate/users/view", {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTkxMTEyLCJqdGkiOiJmNDIzZTJmNDAwN2Y0OTgzYTkyMTBiMGI1YjdlNjlkMiIsInVzZXJfaWQiOjQsInJvbGUiOiJBR0VOVCIsImVtYWlsIjoiZ2VybWFpbjFAZ21haWwuY29tIn0.0gjh79O0FYxucygmk6Zd3OjM1rie_fN17Spkvu9cnjY`,
    //         'Content-Type': 'application/json'
    //     }
    // });



      if (status ==200 || status ==201) {
        //setIsLoading(false);
        setProperties(data.results);
        
      } else {
        //setIsLoading(false);
        //errorNotification("Unable to fetch Biller list");
      }
    } catch (ex) {
      //setIsLoading(false);
      
      //errorNotification("Unable to fetch Biller list");
    }
  }

  useEffect(() => {
    fetchProperties()
    //getUser()

  }, [])
  

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Bootstrap Datatables</h4>
              </div>
            </Card.Header>
            <Card.Body>
             <TableComponent2
             tabledata =  { properties }
             tableheaders = { Header_table }            

             scopedSlots={{
              ACTION: (item) => (
                <td>
                  {/* <PiDotsThreeOutlineVertical onClick={handleShow} /> */}
                  <Dropdown>
            <Dropdown.Toggle  variant="secondary" size="sm" type="icon" id="dropdownMenuButtonSM">
            Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu aria-labelledby="dropdownMenuButtonSM" style={{border:"black solid 0.2px"}}>
                <li><h6 className="dropdown-header">Dropdown header</h6></li>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Button type="button" variant="secondary" onClick={handleShow} >Secondary</Button>
                <li><hr className="dropdown-divider"/></li>
                <Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
                  {/* Your custom action dropdown or button */}
                </td>
              )
            }}


             />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                    <Modal.Title as="h5">Modal title</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            ...
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                                            <Button variant="primary" onClick={handleClose}>Save changes</Button>
                                            </Modal.Footer>
                                        </Modal>
    </>
  );
};

export default AgentLayout(AgentOwnerUnits);
