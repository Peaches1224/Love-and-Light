import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';




export default function Update() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFullName(localStorage.getItem('Full Name'));
        setEmail(localStorage.getItem('Email'));
        setCheckbox(localStorage.getItem('Checkbox Value'))

}, []);

const updateAPIData = () => {
    axios.put(`https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders/${id}`, {

        fullName,
         email,
         checkbox
	})
}

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Full Name</label>
                    <input placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Link to="/read">
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                </Link>
            </Form>
        </div>
    )
}