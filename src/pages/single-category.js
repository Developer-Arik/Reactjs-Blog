import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import posts from '../posts.json'
import cat from '../category.json'
import Error404 from "./404";
import { useParams } from "react-router";

const SingleCategory = () => {
 const {id} = useParams();
 const Data = posts.filter(employee => {
  return employee.cat == id;
 });
 const Category = cat.filter(cat => {
        return cat.id == id;
});
 return (Data.length > 0 ?
  <>
  <Header/>
 <Container fluid>
  <Row className="pt-2">
   <h1>Category : {Category[0].name}</h1>
  </Row>
  <Row className="py-2">
   {Data.map((d) => {
    return <Col key={d.id} xs={12} lg={4} className="py-2">
            <div className="single-blog">
             <div className="img-wrapper">
              <Link to={`/blog/`+d.id}>
               <img src={d.thumbnail} alt="" />
              </Link>
             </div>
             <h2 className="pt-2">
              <Link to={`/blog/`+d.id}>{d.name}</Link>
             </h2>
             <p className="mw-100">{d.excerpt.slice(0,103)}{d.excerpt.length > 103 ? '...' : ''}</p>
            </div>
           </Col>
   })}
  </Row>
 </Container>
 <Footer/>
 </> : <Error404 title={"404 Error not found"} />)
}

export default SingleCategory;