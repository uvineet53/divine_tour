import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";

// components
import PageHeader from "../../layout/PageHeader";

// icons
import { BsArrowRightShort } from "react-icons/bs";

export default function Hospitals({ hospitals }) {
  // page title
  useEffect(() => {
    console.log(hospitals);
    document.title = "Hospitals | Divine Tour and Travels";
  });

  return (
    <>
      <PageHeader />
      <section className="tour-places-area pt-40 pb-40">
        <Container>
          <div>
            We believe in the ancient Indian philosophy of promoting health and
            happiness for all. As a medical travel technology company, we offer
            patient-friendly accommodation near top hospitals in India. Complex
            medical treatments like cancer, cardiology, advanced dental,
            fertility, orthopedic, or cosmetic surgeries often require expertise
            and facilities not available locally. India has become a global hub
            for medical tourism, with cities like Chennai, Delhi, Mumbai,
            Bangalore, Hyderabad, Kolkata, and Vellore boasting world-class
            hospitals and leading medical specialists. Our AI-enabled services
            cater to patients' needs, providing budget-friendly accommodations,
            transport, food, medicines, medical equipment, and trained
            attendants. We aim to make your medical stay as comfortable and
            peaceful as possible, so you can focus on your health and loved
            ones.
          </div>
          <br />
          <h3>Our Support</h3>
          <ol>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start"
              }}
            >
              <span style={{fontSize:"18px"}}>
                Verified Properties:&nbsp;
                </span>
              <span style={{fontSize:"14px"}}>Every aspect of every property that comes for listing with us is verified by a dedicated team, with relevant photographs.</span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start"
              }}
            >
              <span style={{fontSize:"18px"}}>
                Secure payment gateway:&nbsp;
                </span>
              <span style={{fontSize:"14px"}}>our online payment gateway uses the highest security assurance.</span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start"
              }}
            >
              <span style={{fontSize:"18px"}}>
              Easy cancellation/rescheduling:&nbsp;
                </span>
              <span style={{fontSize:"14px"}}>Want to reschedule or cancel your booking with us? No worries. Our easy rescheduling and refund policies and procedures are designed to make your life easy.</span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start"
              }}
            >
              <span style={{fontSize:"18px"}}>
              Independent User Reviews:&nbsp;
                </span>
              <span style={{fontSize:"14px"}}>We urge you to read the independent, uninfluenced reviews and ratings posted by our genuine users before booking our property.</span>
            </div>
            <div
              style={{
                borderLeft: "2px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start"
              }}
            >
              <span style={{fontSize:"18px"}}>
              Loyalty coupons:&nbsp;
                </span>
              <span style={{fontSize:"14px"}}>Our Loyalty Coupons make you stays rewarding in more ways than one!</span>
            </div>
          </ol>
          <Row>
            {hospitals &&
              hospitals.map((hospital, i) => (
                <Col md={4} className="mb-3" key={i}>
                  <Card className="h-100 shadow border-0">
                    <Card.Img variant="top" src={hospital.images[0]} />
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={9}>
                          <h4 className="mb-1">{hospital.name}</h4>
                          <p className="text-ash">{hospital.location}</p>
                        </Col>
                        <Col xs={3}>
                          <Link
                            to={`/hospital-details/${hospital.id}`}
                            className="btn rounded-circle"
                          >
                            <BsArrowRightShort />
                          </Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
