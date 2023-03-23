import React,{useEffect} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import { Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import Data from '../category.json'

const Category = (props) => {
 useEffect(() => {
  document.title = props.title
  window.scrollTo(0,0)
 })
 return <>
  <Header/>
  <Container fluid>
   <Row className="pt-2">
    <h1>Blog Categories</h1>
   </Row>
   <Row className="py-2">
    {Data.map((d) => {
     return <Col xs={12} lg={4} className="py-2" key={d.id} >
             <div className="single-blog">
              <div className="img-wrapper">
               <Link to={'/category/'+d.id}>
                <img src={d.thumbnail_url} alt="" />
               </Link>
              </div>
              <h2 className="pt-2">
               <Link to={'/category/'+d.id}>{d.name}</Link>
              </h2>
              <Link to={'/category/'+d.id} className="btn btn-outline-primary border-2 shadow-none">View Category</Link>
             </div>
            </Col>
    })}
   </Row>
  </Container>
  <Footer/>
 </>
}

export default Category