import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css";

export default function Home() {
  return (
    <>
      {/* photo gallery start */}
      <section className="photo-gallery-area pt-80">
        <Container fluid>
          {/* section heading */}
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="text-center mb-4 mb-md-5">
                What Our Clients Say About Us{" "}
              </h2>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-20 testimonials__wrapper" style={{"display":"flex","justifyContent":"center"}}>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque massa velit
                </p>
              </blockquote>
              <h3>Satvik</h3>
              <h4>Lorem Ipsum</h4>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque massa velit
                </p>
              </blockquote>
              <h3>Satvik</h3>
              <h4>Lorem Ipsum</h4>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque massa velit
                </p>
              </blockquote>
              <h3>Satvik</h3>
              <h4>Lorem Ipsum</h4>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque massa velit
                </p>
              </blockquote>
              <h3>Satvik</h3>
              <h4>Lorem Ipsum</h4>
            </figcaption>
          </figure>
        </Container>
      </section>
      {/* photo gallery end */}
    </>
  );
}
