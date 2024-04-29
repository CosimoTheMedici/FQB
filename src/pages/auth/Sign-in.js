import React, {useEffect, useState} from 'react'
import { Row, Col, Image, Form, Button, ListGroup, } from 'react-bootstrap'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import Card from '../../components/Card'
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';




// img
import facebook from '../../assets/images/brands/fb.svg'
import google from '../../assets/images/brands/gm.svg'
import instagram from '../../assets/images/brands/im.svg'
import linkedin from '../../assets/images/brands/li.svg'
import auth1 from '../../assets/images/auth/01.png'
import { axiosPublic } from '../../services/axios/axios';


const SignIn = () => {
   let history = useNavigate()
   const { auth,setAuth } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/home";

   useEffect(() => {
     if(auth && auth.accessToken) navigate(from, {replace:true})
   
     
   }, [])
   

   let [credentials, setCredentials] = useState({
       email: 'germain1@gmail.com',
       password: '1234'
     })
     
     const handleChange = (event) => {
       let value = event.target.value;
       let name = event.target.name;

       //console.log("value",value)
     
       setCredentials((prevalue) => {
         return {
           ...prevalue,                
           [name]: value
         }
       })
     }

   //   const handleSubmit = async (e) => {console.log("knknknk")}
     const handleSubmit = async (e) => {
       e.preventDefault();

       let payload = {
           email : credentials.email,
           password :credentials.password
       };
       console.log("payload",payload)
       try {
         const { data: fetchLoginResponses, status } = await axiosPublic.post(`estate/login`, payload,
         {
           withCredentials: true,
         });
        console.log("fetchLoginResponses",fetchLoginResponses)

         if(status === 200){
           var decoded = jwtDecode(fetchLoginResponses.access);
           console.log("decoded",decoded)
           //email: "germain1@gmail.com",exp: 1712781925,jti:"ab8d13284d73470cb3c2484a959560f6",role: "AGENT",token_type: "access",user_id: 4

           const email = decoded.email
           
           

           setAuth({user:decoded.email,roles:decoded.role,access:fetchLoginResponses.access})
           console.log(auth)

           let value = decoded.role
           if(value==="AGENT"){
            //setAuth({ ...auth, roles: 2000 });
              localStorage.setItem("token", fetchLoginResponses.access);
             navigate('/home/agent', {replace:true});

           }
           if(value==="AGENTOWNER"){
            setAuth({ ...auth, roles: 3000 });
              localStorage.setItem("token",fetchLoginResponses.access );
             navigate('/home/agentowner', {replace:true});

           }
           if(value==="OWNER"){
            setAuth({ ...auth, roles: 4000 });
              localStorage.setItem("token",fetchLoginResponses.access );
             navigate('/home/owner', {replace:true});

           }
           if(value==="TENANT"){
            setAuth({ ...auth, roles: 1000 });
              localStorage.setItem("token",fetchLoginResponses.access);
               navigate('/home/tenant', {replace:true});

           }
           if(value===5000){
              localStorage.setItem("token",fetchLoginResponses.access);
             navigate('/home/agent_owner', {replace:true});

           }

           console.log(auth)
           //navigate(from, {replace:true});
           
         }
         
         
       } catch (error) {

         console.log(error)
         
       }
       // hashPassword
       // 1email.jnjc@gmail.com

       // setAuth({user:"cosmas", payload, roles:[2001,2002],accessToken:"accessTokenrefu"})
       // console.log(auth);
       //navigate(from, {replace:true});

       
       // const loginResponse = await loginUser(payload)
       // const {status,data, message} = loginResponse
       // if (status ===200 && message === "authorised")loginUserData(data) 

      


     }


     const loginUserData = (data) => {
       let accessToken =  data.access_token;
       let refreshToken = data.refresh_token;
       localStorage.set("accessToken",data.access_token)
       localStorage.set("refreshToken",data.refresh_token)

     }
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                                 <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                                 </svg>
                                 <h4 className="logo-title ms-3">Hope UI</h4>
                              </Link>
                              <h2 className="mb-2 text-center">Sign In</h2>
                              <p className="text-center">Login to stay connected.</p>
                              <form onSubmit={handleSubmit}>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">Email</Form.Label>
                                          <Form.Control type="email" className="" id="email" name="email" value = "germain1@gmail.com" aria-describedby="email" placeholder="Email" onChange={handleChange} autoComplete='false' />
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password"  name="password" value = "1234" aria-describedby="password" placeholder="Password" onChange={handleChange} autoComplete='false' />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-3">
                                          <Form.Check.Input type="checkbox" id="customCheck1" />
                                          <Form.Check.Label htmlFor="customCheck1">Remember Me</Form.Check.Label>
                                       </Form.Check>
                                       <Link to="/auth/recoverpw">Forgot Password?</Link>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button  type="submit" variant="btn btn-primary">Sign In</Button>
                                 </div>
                                 <p className="text-center my-3">or sign in with other accounts?</p>
                                 <div className="d-flex justify-content-center">
                                    <ListGroup as="ul" className="list-group-horizontal list-group-flush">
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={facebook} alt="fb" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={google} alt="gm" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={instagram} alt="im" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={linkedin} alt="li" /></Link>
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </div>
                                 <p className="mt-3 text-center">
                                    Don’t have an account? <Link to="/auth/sign-up" className="text-underline">Click here to sign up.</Link>
                                 </p>
                              </form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <div className="sign-bg">
                     <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                           <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
                           <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
                           <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
                           <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
                        </g>
                     </svg>
                  </div>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images" />
               </Col>
            </Row>
         </section>
      </>
   )
}

export default SignIn
