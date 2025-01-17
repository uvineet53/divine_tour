import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// icons
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* contact medium area start */}
      <section className="contact-medium-area pt-60 pb-60">
        <Container>
          <Row>
            <Col md={4} className='mb-3'>
              <div className="item h-100 px-4 py-4 py-md-5 text-center">
                <span className="icon mb-4"><FaRegEnvelope /></span>
                <h4 className='text-black text-uppercase'>email address</h4>
                <ul>
                  <li>divinetoursandtravels1122@gmail.com</li>
                </ul>
              </div>
            </Col>
            <Col md={4} className='mb-3'>
              <div className="item h-100 px-4 py-4 py-md-5 text-center">
                <span className="icon mb-4"><FaPhoneAlt /></span>
                <h4 className='text-black text-uppercase'>PHONE NUMBER</h4>
                <ul>
                  <li>+91-7011255685</li>
                </ul>
              </div>
            </Col>
            <Col md={4} className='mb-3'>
              <div className="item h-100 px-4 py-4 py-md-5 text-center">
                <span className="icon mb-4"><FaMapMarkerAlt /></span>
                <h4 className='text-black text-uppercase'>ADDRESS LOCATION</h4>
                <ul>
                  <li>Plot no 2673 A,  
Sector 46 near HUDA market
Gurgaon 122003</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* contact medium area end */}
    </>
  )
}
