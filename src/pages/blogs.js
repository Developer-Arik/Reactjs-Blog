import React,{useEffect} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import { Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import Data from '../posts.json'

const Blog = (props) => {
 useEffect(() => {
  document.title = props.title
  window.scrollTo(0,0)
 })
 return <>
  <Header/>
  <Container fluid>
   <Row className="pt-2">
    <h1>All Blog Posts</h1>
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
 </>
}

export default Blog