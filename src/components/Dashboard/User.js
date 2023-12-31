import './user.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'


const User = () => {

    const user ={
        name:"ahmed",
        email:"ahmed@yahoo.com",
        phone:"01111111111",
        address:"cairo",
        password:"123456",
        image:'',
        role:'admin',

    }


    return (
<div className='container'>
    <h3 style={{textAlign:"center"}}>user details</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder={user.name} />

      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder={user.email} />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone</Form.Label>
        <Form.Control type="number" placeholder={user.phone} />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>address</Form.Label>
        <Form.Control type="text" placeholder={user.address} />

      </Form.Group>
{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        update info
      </Button>
    </Form>
</div>
    )
}

export default User