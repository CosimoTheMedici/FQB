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






const AgentOwnerProperties = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const axiosPrivate = useAxiosPrivate();
async function getUser() {
  try {
    const response = await axios.get('https://a9e1-105-160-94-127.ngrok-free.app/estate/properties/view', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NDg3ODI1LCJqdGkiOiI5OWU3YjEwMGNlNGM0MzhiODdkZjQwYjhjMWMxMjJjYiIsInVzZXJfaWQiOjQsInJvbGUiOiJBR0VOVCIsImVtYWlsIjoiZ2VybWFpbjFAZ21haWwuY29tIn0._BR_7Vhm8-p9qGUGMRi9nH37_wR-rXPu1jf6uGt09KY`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

  async function fetchProperties() {
    try {
     // setIsLoading(true);
      // const { dataRes: fetchBillerResponse } = await getBillers({
      //   limit: 1000000,
      //   offset: 0,
      // });

      // const fetchTenantsResponses = await axiosPrivate.get(`/estate/properties/view`);
      // console.log("fetchTenantsResponses",fetchTenantsResponses)

      //const fetchTenantsResponses = await fetch("http://50.17.75.252:8000/estate/properties/view", {
      const fetchTenantsResponses = await fetch("http://50.17.75.252:8000/estate/users/view", {
        method: 'GET',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0MjU1MTkzLCJqdGkiOiI0YjYxZjYwNzUwOWI0ZDdiYTM0MGFjYzI5YWMzYjc2ZCIsInVzZXJfaWQiOjQsInJvbGUiOiJBR0VOVCIsImVtYWlsIjoiZ2VybWFpbjFAZ21haWwuY29tIn0.crnaZtBgC9GlvS7DrB2ccD0aa6GH6-eBpASn7tg293c`,
            'Content-Type': 'application/json'
        }
    });



      if (fetchTenantsResponses) {
        //setIsLoading(false);
        //setBillers(fetchBillerResponse.results);
        
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
    //fetchProperties()
    getUser()

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
             tabledata = { Data_table }
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

export default AgentLayout(AgentOwnerProperties);
