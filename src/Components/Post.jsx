import React, {useEffect, useState}  from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Post() {

    const [post, setPost] = useState(false);
    const handleClosePost = () => setPost(false);
    const handlePost = () => setPost(true);

  return (
    <div>
      {/* registration modal */}

      <Modal show={post} onHide={handleClosePost}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Seller Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                placeholder="e.g Tom Robert"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="*****"
                autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*****"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="phone number"
                placeholder="0123-4567891"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID card number</Form.Label>
              <Form.Control
                type="ID"
                placeholder="12345-1234567-1"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Shop name</Form.Label>
              <Form.Control
                type="shop"
                placeholder="e.g Gulahmad"
                autoFocus
              />
            </Form.Group>
            <p>Catagory</p>
            <Form.Select aria-label="Default select example">
            <option>Select Catagory</option>
            <option value="1">Food</option>
            <option value="2">Furniture</option>
            <option value="3">Cloths</option>
          </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClosePost} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Post
