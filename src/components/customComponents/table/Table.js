import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate'
import { Data_table } from "./data";



// const TableComponent = () => {
//     const [pageCount, setPageCount] = useState(11)
//     const [pager, setPager] = useState(false)
    




//       const handlePageClick = (data) => {
//         console.log(data.selected);
//         let page = data.selected +1;
//         pager ===true ?pagedata(page,9):getMovieListData(page,limit);
//         console.log("pager",pager)
        
    
//       }

//       const pagedata = (page,limit) => {

//            const startIndex = (page - 1) * limit
//            const endIndex = page * limit
//            setMovieData(Data_table.slice(startIndex,endIndex))
        
    
//       }
//   return (
//      <>
//     {/* //   <Row>
//     //     <Col sm="12">
//     //       <Card>
//     //         <Card.Header className="d-flex justify-content-between">
//     //           <div className="header-title">
//     //             <h4 className="card-title">Bootstrap Datatables</h4>
//     //           </div>
//     //         </Card.Header>
//     //         <Card.Body> */}
              
//               <div className="table-responsive border-bottom my-3">
//                 <Table
//                   responsive
//                   striped
//                   id="datatable"
//                   className=""
//                   data-toggle="data-table"
//                 >
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Position</th>
//                       <th>Office</th>
//                       <th>Age</th>
//                       <th>Start date</th>
//                       <th>Salary</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Data_table.map((item) => (
//                       <tr key={item.age}>
//                         <td>{item.name}</td>
//                         <td>{item.position}</td>
//                         <td>{item.office}</td>
//                         <td>{item.age}</td>
//                         <td>{item.startdate}</td>
//                         <td>{item.salary}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                   <tfoot>
//                     <tr>
//                       <th>Name</th>
//                       <th>Position</th>
//                       <th>Office</th>
//                       <th>Age</th>
//                       <th>Start date</th>
//                       <th>Salary</th>
//                     </tr>
//                   </tfoot>
//                 </Table>
             

// <ReactPaginate
//       previousLabel={"previous"}
//       nextLabel={"next"}
//       breakLabel={"..."}
//       pageCount={pageCount}
//       marginPagesDisplayed={2}
//       pageRangeDisplayed={3}
//       onPageChange={handlePageClick}
//       containerClassName={'pagination justify-content-center text-color'}
//       pageClassName={'page-item'}
//       pageLinkClassName={'page-link'}
//       previousClassName={'page-item'}
//       previousLinkClassName={'page-link'}
//       nextClassName={'page-item'}
//       nextLinkClassName={'page-link'}
//       breakClassName={'page-item'}
//       breakLinkClassName={'page-link'}
//       activeClassName={'active'}
//     />

//               </div>
//             {/* </Card.Body>
//           </Card>
//         </Col>
//       </Row>*/}
//     </> 
//   );
// };

// export default TableComponent;



// export const TableComponent1 = (props) => {
//   const [movieData, setMovieData] = useState([]);
//   const [pageCount, setPageCount] = useState(11);
//   const [pager, setPager] = useState(false);

//   const limit = 9; // Number of items per page

//   const handlePageClick = (data) => {
//     console.log(data.selected);
//     const page = data.selected + 1;
//     pager ? pagedata(page, limit) : getMovieListData(page, limit);
//     console.log("pager", pager);
//   }

//   const pagedata = (page, limit) => {
//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;
//     setMovieData(Data_table.slice(startIndex, endIndex));
//   }

//   const getMovieListData = (page, limit) => {
//     // Replace this with your actual API call to fetch movie data
//     // Example: fetchMovies(page, limit).then(data => setMovieData(data));
//     console.log("Fetching data for page", page);
//   }

//   return (
//     <>
//       <div className="table-responsive border-bottom my-3">
//         <Table responsive striped id="datatable" className="" data-toggle="data-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Position</th>
//               <th>Office</th>
//               <th>Age</th>
//               <th>Start date</th>
//               <th>Salary</th>
//             </tr>
//           </thead>
//           <tbody>
//             {movieData.map((item) => (
//               <tr key={item.age}>
//                 <td>{item.name}</td>
//                 <td>{item.position}</td>
//                 <td>{item.office}</td>
//                 <td>{item.age}</td>
//                 <td>{item.startdate}</td>
//                 <td>{item.salary}</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <th>Name</th>
//               <th>Position</th>
//               <th>Office</th>
//               <th>Age</th>
//               <th>Start date</th>
//               <th>Salary</th>
//             </tr>
//           </tfoot>
//         </Table>

//         <ReactPaginate
//           previousLabel={"previous"}
//           nextLabel={"next"}
//           breakLabel={"..."}
//           pageCount={pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={3}
//           onPageChange={handlePageClick}
//           containerClassName={'pagination justify-content-center text-color'}
//           pageClassName={'page-item'}
//           pageLinkClassName={'page-link'}
//           previousClassName={'page-item'}
//           previousLinkClassName={'page-link'}
//           nextClassName={'page-item'}
//           nextLinkClassName={'page-link'}
//           breakClassName={'page-item'}
//           breakLinkClassName={'page-link'}
//           activeClassName={'active'}
//         />
//       </div>
//     </>
//   );
// };

export const TableComponent2 = (props) => {
  console.log("props",props.tableheaders[0].label)
    const [movieData, setMovieData] = useState(props.tabledata);
    const [tableHeaders, setTableHeaders] = useState(props.tableheaders);
    const [pageCount, setPageCount] = useState(0); // Will be updated after fetching data
    const limit = 9; // Number of items per page
  
    useEffect(() => {
      // Simulate API call to fetch data from JSON file
      fetchData();
    }, []);
  
    const fetchData = () => {
      // Here, you would replace this with an actual API call to fetch data from a server
      // For demonstration purposes, we'll use a timeout to mimic an API call
      setTimeout(() => {
        const totalItems = Data_table.length;
        setPageCount(Math.ceil(totalItems / limit));
        setMovieData(Data_table.slice(0, limit)); // Initial data for the first page
      }, 1000); // Simulated delay of 1 second
    };
  
    const handlePageClick = ({ selected }) => {
      const page = selected + 1;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      setMovieData(Data_table.slice(startIndex, endIndex));
    };
  
    return (
      <>
        <div className="table-responsive border-bottom my-3">
          <Table responsive striped id="datatable" className="" data-toggle="data-table">
            <thead>
              <tr>
               
                {tableHeaders.map((item, index) => (
                 
               
                  <th key={index}>{item.label}</th>
                 
                  
           
              ))}
              </tr>
            </thead>
            <tbody>
              {movieData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.office}</td>
                  <td>{item.age}</td>
                  <td>{item.startdate}</td>
                  <td>{item.salary}</td>
                  <td>{props.scopedSlots.ACTION(item)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </Table>
  
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center text-color'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </div>
      </>
    );
  };