import React,{useEffect} from "react";
import Header from "../components/header"
import Hero from '../components/Hero'
import FeaturedBlog from '../components/Frautured-blog'
import Footer from "../components/footer"
import FeaturedCat from "../components/FeaturedCat"

const Home = (props) => {
 useEffect(() => {
  document.title = props.title
  window.scrollTo(0,0)
 })
 return <>
  <Header/>
  <Hero/>
  <FeaturedBlog title={'Featured Blogs'} />
  <FeaturedCat title={'Blog Categories'} />
  <Footer/>
 </>
}

export default Home;