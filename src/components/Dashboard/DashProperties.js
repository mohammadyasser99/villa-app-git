
import React ,{useState} from 'react';
import { NavLink, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate , } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const DashProperties = () => {
    const [show, setShow] = useState(false);
    //here we put the http request to edit the data
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    const [selectedslideshows , setselectedslideshows] = useState();
    
    
    
        const navigate = useNavigate();
    
    
        const editnavigate = (id) => {
      
            // navigate(`/dashboard/editslideshow/${id}`)
            setselectedslideshows(id);
            handleShow();
        
        }
    
      

    const arr = [
        {
            id:1,
            type:"villa house",
            city:"cairo",
            country:"egypt",
            price:1000000,
            area:500,
            rooms:5,
            bathrooms:3,
            image:"",
            caption:"huge villa for sale in cairo",
            address:"cairo, egypt",
        },
        {
            id:2,
            type:"apartment",
            city:"alex",
            country:"egypt",
            price:1000000,
            area:200,
            rooms:3,
            bathrooms:1,
            image:"",
            caption:"huge apaartment for sale in alex",
            address:"alex, egypt",

        }
    ];
    


    const result = arr.map((item) => {
        return(
            <Card style={{ width: '18rem' , margin:"10px " }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{item.country}</Card.Title>
              <Card.Title>{item.city}</Card.Title>
              <Card.Title>{item.address}</Card.Title>
              <Card.Text>
            type: {item.type}
              </Card.Text>
              <Card.Text>
             {item.price}
              </Card.Text>
              <Card.Text>
           rooms:  {item.rooms}
              </Card.Text>
              <Card.Text>
            bathrooms: {item.bathrooms}
              </Card.Text>
              <Card.Text>
            area: {item.area}
              </Card.Text>
              <Card.Text>
             {item.caption}
              </Card.Text>
              <div   
              className='d-flex justify-content-between'
              >
              <Button variant="primary" onClick={() =>editnavigate(item.id)}> edit</Button>
              <Button variant="danger">remove</Button>
                </div>
              
            </Card.Body>
            </Card>
        )

    })

    return(
    <div className='container'>
        <Row>

        {result}

</Row>

{arr.filter((item) => item.id === selectedslideshows).map((item) => {
    return(
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit slideshow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>city</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.city}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>country</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.country}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>caption</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.caption}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>type</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.type}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>rooms</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.rooms}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>bathrooms</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.bathrooms}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.price}
              
              />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>insert image</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
)}


</div>
 
    )
    
}


export default DashProperties;