import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Cat from '../category.json'

const FeaturedCat = (props) => {
 const Cats = [];
  for (let i = 0;Cat.length > 4 ? i < 4 : i < Cat.length;i++) {
   Cats.push(<Col className="py-2" key={Cat[i].id} md={6} lg={6}>
    <div className="single-blog">
     <div className="img-wrapper">
      <Link to={'/category/'+Cat[i].id} >
       <img src={Cat[i].thumbnail_url} alt="" />
      </Link>
     </div>
     <h2 className="mt-2">
      <Link to={'/category/'+Cat[i].id}>{Cat[i].name}</Link>
     </h2>
     <Link to={'/category/'+Cat[i].id} className="btn btn-outline-primary border-2 shadow-none">View Category</Link>
    </div>
   </Col>)
  }
 

 return <section>
 <Container fluid>
  <Row className="py-3">
   <Col xs={12}>
    <h1>{props.title}</h1>
   </Col>
  </Row>
  <Row>
   {Cats}
  </Row>
  <Row>
   <div className="py-1"></div>
  </Row>
 </Container>
</section>
}

export default FeaturedCat