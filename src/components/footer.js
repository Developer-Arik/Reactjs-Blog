import React,{useState} from "react";
import { Link } from "react-router-dom";

import { Container,Col,Row,Button } from "react-bootstrap";
import { useEffect } from "react";

const Footer = () => {

  const [scrollY,setscrollY] = useState()

  useEffect(() => {
    window.onscroll = () => {
      setscrollY(window.pageYOffset);
    }
  })

 return <footer>
  {(scrollY > 250 ? <Button onClick={() => {
    window.scrollTo(0,0)
  }} style={{"position" : "fixed","bottom" : "0","zIndex" : 9999999999999,"margin" : 15,"right" : 0,"background" : 'rgb(43 12 167)',"border" : "rgb(43 12 167)","transition" : "2s"}} className={'shadow-none anim-fade'}>
   <svg xmlns="http://www.w3.org/2000/svg" height="25px" fill="#fff" className="bi bi-arrow-up" viewBox="0 0 16 16">
     <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"></path>
   </svg>
  </Button> : <Button onClick={() => {
    window.scrollTo(0,0)
  }} style={{"position" : "fixed","bottom" : "0","zIndex" : 9999999999999,"margin" : 15,"right" : 0,"background" : 'rgb(43 12 167)',"border" : "rgb(43 12 167)","transition" : "2s"}} className={'shadow-none anim-fade-out'}>
   <svg xmlns="http://www.w3.org/2000/svg" height="25px" fill="#fff" className="bi bi-arrow-up" viewBox="0 0 16 16">
     <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"></path>
   </svg>
  </Button> )}
  <Container fluid>
   <Row className="py-4 justify-content-center">
    <div className="d-flex justify-content-center">
     <Link to={'/'}>
      <img height={40} className="m-auto mw-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
     </Link>
    </div>
   </Row>
   <Row className="justify-content-center">
    <Col sm={12} lg={6}>
     <p style={{color : '#64718a'}} className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque commodi perspiciatis quibusdam.Lorem ipsum dolor sit amet, consectetur.</p>
    </Col>
   </Row>
   <Row className="justify-content-center">
    <Col xs={12} lg={6}>
     <p style={{color : '#64718a'}} className="text-center">© TechHub-Blog Creative 2022. All rights reserved</p>
    </Col>
   </Row>
  </Container>
 </footer>
};

export default Footer