import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// icons
import { BsArrowRightShort } from 'react-icons/bs';

export default function Hospitals({ hospitals }) {
  // page title
  useEffect(() => {
    console.log(hospitals)
    document.title='Hospitals | Divine Tour and Travels';
  });

  return (
    <>
      <PageHeader />

      {/* tour places start */}
      <section className="tour-places-area pt-40 pb-40">
        <Container>
          {/* place items */}
          <Row>

            {/* destination item */}
            {
              hospitals && hospitals.map( (hospital, i) => (
                <Col md={4} className='mb-3' key={ i }>
                  <Card className='h-100 shadow border-0'>
                    <Card.Img variant="top" src={ hospital.images[0] } />
                    <Card.Body>
                      <Row className='align-items-center'>
                        <Col xs={9}>
                          <h4 className='mb-1'>{ hospital.name }</h4>
                          <p className='text-ash'>{ hospital.location }</p>
                        </Col>
                        <Col xs={3}>
                          <Link to={`/hospital-details/${hospital.id}`} className="btn rounded-circle"><BsArrowRightShort /></Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>
      {/* tour places end */}
    </>
  )
}
