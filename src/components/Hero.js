import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Data from '../posts.json';

const Hero = () => {
  return <>
    <section className="hero">
      <Container fluid={true}>
        <Row>
          <Col sm={12} md={3*2} className={'m-auto py-3'}>
            <h1>{Data[0].name}</h1>
            <p>{Data[0].excerpt}{Data[0].description.length > 120 ? '...' : ''}</p>
            <Link className="btn btn-primary py-2 px-3 shadow-none" to={'/blog/'+Data[0].id}>Read more</Link>
          </Col>
          <Col sm={12} md={3*2} className={'d-flex align-items-center py-3'}>
            <img style={{borderRadius:6}} width={100+'%'} src={Data[0].thumbnail} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  </>
}

export default Hero