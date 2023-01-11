import React from 'react';

import Home from './Home'
import About from './About'
import Products from './Products';
import Readings from './Readings';
// import Games from './Games';

import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Read from './Read';
import Update from './Update';

function NavigationBar() {
  return (
    <>
     <Row className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Love & Light</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">  
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/products">Products</Link>
                        <Link className="nav-link" to="/readings">Readings</Link>
                         {/* <Link className="nav-link" to="/games">Games</Link> */}
                          
                    </div>
                  
                   </div>
                    
                  </div>
            </Row>
                    <Row>
                  <Routes>
              <Route exact path ='/' element = {<Home />} />
            <Route exact path ='/about' element = {<About/>} />
            <Route path ='/products' element = {<Products />} />
            <Route path ='/readings' element = {<Readings />} />
            {/* <Route path ='/create' element = {<Create />} />  */}
            <Route path ='/read' element = {<Read />} /> 
            <Route path ='/update' element = {<Update />} /> 
            
            
            
           </Routes>
              
           
           
              </Row>
              </>
        
// line 47 is nested inside the routes so all the routes will worke seperately 
        
        // </>
 

    // </>
  );
}

//  <Link to="/">Home</Link>
export default NavigationBar;

// import About from './About';

// export default function Navbar() {
//   return (
//       <Row className="container">
//         <Col sm={3} id="navbar">
//           <Link to="/">
//             <Button className="fluid ui olive button mb-4">Home</Button>
//           </Link>
//           <Link to="/menu">
//             <Button className="fluid ui olive button mb-4">About</Button>
//           </Link>
//           <Link to="/employee">
//             <Button className="fluid ui olive button mb-4">Products</Button>
//           </Link> 
//           <Link to="/employee">
//             <Button className="fluid ui olive button mb-4">Readings</Button>
//           </Link> 
//           <Link to="/employee">
//             <Button className="fluid ui olive button mb-4">Games</Button>
//           </Link> 
//         </Col>
//         <Col sm={9}>
//           <Routes>
          //   <Route exact path ='/' element = {<Home />} />
          //   <Route exact path ='/about' element = {<About/>} />
          //   <Route path ='/products' element = {<Products />} />
          //   <Route path ='/readings' element = {<Readings />} />
          //   <Route path ='/games' element = {<Games />} />
          //   {/* <Route path ='/update' element = {<Update />} /> */}
          // </Routes>
//         </Col>
//       </Row>
//   );
// }




// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NB from 'react-bootstrap/Navbar';
// import { Outlet, Link } from "react-router-dom";

//     <>
//       <br />
//       {/* <NB bg="light" variant="light">
//         <Container>
//           <NB.Brand href="#home">Love and Light</NB.Brand>
//           <Nav className="me-auto">
//             <Nav.Link to="/">Home</Nav.Link>
//             <Nav.Link to="/about">About</Nav.Link>
//             <Nav.Link to="/products">Products</Nav.Link>
//             <Nav.Link to="/readings">Readings</Nav.Link>
//             <Nav.Link to="/games">Games</Nav.Link>
//           </Nav>
//         </Container>
//       </NB> */}