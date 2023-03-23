import React,{useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import Header from '../components/header'
import Footer from '../components/footer'

const Error404 = (props) => {
 useEffect(() => {
  document.title = props.title
  window.scrollTo(0,0)
 })
 return <>
 <Header/>
 <Container>
  <Row>
   <Col sm={12}>
    <h1>404 Not Found</h1>
   </Col>
  </Row>
 </Container>
 <Footer/>
 </>
}

export default Error404