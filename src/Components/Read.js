
import { Table, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';






export default function Read() {
    const [APIData, setAPIData] = useState([]); // this is going to update the state
     useEffect(() => {
        axios.get(`https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders/`)
            .then((response) => {
                
                setAPIData(response.data);
            })
       
 }, []) // everything abouve is javascript, everything below is what the user sees
 const setData = (data) => {
        let { id, fullName, email, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Full Name', fullName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Checkbox Value', checkbox)
}



const onDelete = (id) => {
  axios.delete(`https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders/${id}`)
 .then(() => {
        getData(); // this will reach out to axios and delete a specific data then call the data back so it updates
    })
}

const getData = () => {
    axios.get(`https://6350709d3e9fa1244e4696f9.mockapi.io/api/final/orders/`) // this a refresh element 
        .then((getData) => {
             setAPIData(getData.data);
         })
}
    return (
        
        <div>
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Check Box</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>

                           
                                                </Table.Row>
                </Table.Header>

             <Table.Body>
  {APIData.map((data) => {

     return (
       <Table.Row>
          <Table.Cell>{data.fullName}</Table.Cell>
           <Table.Cell>{data.email}</Table.Cell>
           <Table.Cell>{data.Comments}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
        
        
            <Table.Cell> 
                <Link to='/update'>
            <Button onClick={() => setData(data)}>Update</Button>
             </Link>
            
            <Button onClick={() => onDelete(data.id)}>Delete</Button>
          
            </Table.Cell>
      
        </Table.Row>
        
   )})}
</Table.Body>
            </Table>


        </div>
    )
}

// A table where you all the value you eneter shows up on the table