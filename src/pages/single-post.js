import React, { useEffect , useRef} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import { Col, Container, Row ,Card } from "react-bootstrap";
import Error404 from './404'

import posts from '../posts.json'
import cat from '../category.json'
import { useParams } from "react-router";

const SinglePost = () => {
 const {id} = useParams();
 const paraRef = useRef(null)

 const {scrollTo} = window

 const Data = posts.filter(employee => {
  return employee.id == id;
 });

 useEffect(() => {
  if(Data.length !== 0){
    document.title = `Post ${id} | ReactBlog`
  }else{}
  scrollTo(0,0)
 },[id,scrollTo,Data.length])
 useEffect(() => {
  if(Data.length !== 0){
    paraRef.current.innerHTML = Data[0].description
  }
});

  return  (Data.length !== 0 ? <>
    <Header/>
    <Container fluid={true}>
    <Row>
      <Col md={7}>
      <h1 className="mb-2">{Data[0].name}</h1>
      <img style={{borderRadius : 8 +'px'}} width={100+"%"} src={Data[0].thumbnail} alt="" />
      <p className="mt-3" ref={paraRef}></p>
      </Col>
      <Col md={5} className={'pt-2'}>
      {posts.map((p) => {
        const category = cat.filter(cat => {
          return cat.id == p.cat;
        })[0].name;
        
        return <Card key={p.id} className="my-2" style={{ width: '100' }}>
        <Card.Img variant="top" src={p.thumbnail} />
        <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>
          {p.excerpt}
        </Card.Text>
        </Card.Body>
      </Card>
      })}
      </Col>
    </Row>
    </Container>
    <Footer/>
  </> : <Error404 title={"404 Error not found"} /> )
 
}

export default SinglePost