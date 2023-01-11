
import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'




export default function Create() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [comment, setComment] =  useState ('');
   
     

        const postData = () => {
        axios.post(`https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders/`, {
            fullName,
            email,
            checkbox
        })
    }

    return (
      <Form>
        <Form.Field>
            <label>Full Name</label>
<input placeholder='Full Name' onChange={(e) => setFullName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Eamil' onChange={(e) => setEmail(e.target.value)}/>
      </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>

        </Form.Field>
         <Form.Field>
            <Checkbox label='Tarot Readings' onChange={(e) => setCheckbox(!checkbox)}/>

        </Form.Field>
         <Form.Field>
            <Checkbox label='Numerology Readings' onChange={(e) => setCheckbox(!checkbox)}/>

        </Form.Field>
        <Link to="/read">
        <Button onClick={postData} type='submit'>Submit</Button>
        </Link>
    </Form>

)
    }

