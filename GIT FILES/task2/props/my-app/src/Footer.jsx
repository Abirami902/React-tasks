import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCopyright } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Footer() {
  return (
    <footer className='mt-5'>
        <Container fluid className='p-4 bg-black text-white'>
            <Row className=''>
                <Col xs={2}>
                    <div className='d-block'>
                        <div className='text-secondary fw-bold '>Deck. </div>
                        <div className='text-secondary fw-medium' style={{fontSize:".8rem"}}><FaRegCopyright />2018 Deck</div>
                        <div className='text-secondary fw-medium ' style={{fontSize:".8rem"}}>Component based UI kit</div>
                    </div>
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none fw-bold'>TECHNOLOGY</a></p>
                    <p><a href="" className='text-reset text-decoration-none fw-bold'>IDEAS</a></p>
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none fw-bold'>LEADERSHIP</a></p>
                   <p><a href="" className='text-reset text-decoration-none fw-bold'>VIDEO</a></p>
                    
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none fw-bold'>NEWS</a></p>
                    <p><a href="" className='text-reset text-decoration-none fw-bold'>FINANCE</a></p>
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none fw-bold'>ENTERTAINMENT</a></p>
                </Col>
                <Col xs={3} className='text-end'>
                    <div className='text-secondary fw-medium' style={{fontSize:".8rem"}}>
                        <span>Follow Us on:</span>
                        <a href="" className='text-decoration-none m-1 text-reset'><ImInstagram /></a>
                        <a href="" className='text-decoration-none m-1 text-reset'><FaPinterestP /></a>
                        <a href="" className='text-decoration-none m-1 text-reset'><FaTwitter /></a>
                        <a href="" className='text-decoration-none m-1 text-reset'><FaFacebookF /></a>

                    </div>
                    <Row className="mb-3 email"/>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Your E-mail" />
                    </Form.Group>

                          
                   <Button variant="danger" type="submit" className='butt'>
                   SUBSCRIBE
                   </Button>

                </Col>

            </Row>
        </Container>
    </footer>
  )
}

export default Footer