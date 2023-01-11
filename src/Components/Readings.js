import React from 'react'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import Create from '../Components/Create';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
import Read from './Read';
import Update from './Update';
import Footer from './Footer';
// import CarouselReading from './CarouselReading'


const READINGS_ENDPOINT = " https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders";

 function Readings() {
  return (
    

    <div>

<h1> Readings Form</h1>

<p> This form is to ensure that you get the specific reading for you and your needs.</p>
{/* < CarouselReading /> */}

  < Create />
 
< Outlet />




{/* <h1>Readings Form</h1> */}
  
  {/* MyApi
  https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders */}

 {/*IMPORTANT!! I got an error message saying I can't have another router inside a router lines 18-20, LINES 5-6 dimmed */}

{/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Adress</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Tarot Reading" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Numerology Reading" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   */}

   <Footer />
    </div>
  );
}

export default Readings;
