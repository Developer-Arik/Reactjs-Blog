import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Data from '../posts.json'

const FeaturedBlog = (props) => {
 const Blogs = [];
 for (let index = 0; index < 3; index++) {
  Blogs.push(<Col key={Data[index].id} md={6} lg={4}>
   <div className="single-blog">
    <div className="img-wrapper">
     <Link to={`/blog/`+Data[index].id}>
      <img src={Data[index].thumbnail} alt="" />
     </Link>
    </div>
    <h2 className="pt-2">
     <Link to={`/blog/`+Data[index].id}>{Data[index].name}</Link>
    </h2>
    <p className="mw-100">{Data[index].excerpt.slice(0,103)}{Data[index].description.length > 103 ? '...' : ''}</p>
   </div>
  </Col>)
 }
 return <>
  <section>
   <Container fluid>
    <Row className="py-3">
     <Col xs={12}>
      <h1>{props.title}</h1>
     </Col>
    </Row>
    <Row>
     {Blogs}
    </Row>
    <Row className="justify-content-center">
     <Col xs={12} lg={5}>{Data.length > 3 ? <Link to={'/blogs'} className={"btn btn-outline-primary border-2 shadow-none w-100"}>Explore More</Link> : ''}</Col>
    </Row>
    <Row>
     <div className="py-1"></div>
    </Row>
   </Container>
  </section>
 </>
}

export default FeaturedBlog