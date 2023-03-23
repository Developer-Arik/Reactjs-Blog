import React,{useRef,useState,useEffect} from "react";
import {Link,useLocation} from 'react-router-dom'
import { Collapse } from "react-bootstrap";

const Header = () => {
 const location = useLocation();
 const [headerHeight,setHeader_height] = useState();
 const [displayMenu,setDisplayMenu] = useState(false);
 const HeaderRef = useRef(null);

 useEffect(() => {
  setHeader_height(HeaderRef.current.clientHeight);
 },[])

 return <>
 <header ref={HeaderRef}>
  <div className="d-flex justify-content-center align-items-center">
    <div className="logo p-3">
      <Link to={'/'}>
        <img height={48} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
      </Link>
    </div>
    <div className="nav justify-content-end">
     <svg style={{cursor : 'pointer'}} onClick={() => {
       displayMenu === false ? setDisplayMenu(true) : setDisplayMenu(false) 
     }} className="mx-2" fill='#fff' viewBox="0 0 24 24" width="40px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
     <ul className="desc">
      <li className={location.pathname === '/' ? 'active' : ''} >
        <Link to={'/'}>Home</Link>
      </li>
      <li className={location.pathname === '/blogs' ? 'active' : ''}>
        <Link to={'/blogs'}>Blogs</Link>
      </li>
      <li className={location.pathname === '/category' ? 'active' : ''}>
        <Link to={'/category'}>Category</Link>
      </li>
      <li>
        <Link to={'/authors'}>Authors</Link>
      </li>
     </ul>
    </div>
  </div>
  <Collapse style={{background : '#121826'}} in={displayMenu}>
        <div className="mobile-menu">
          <ul className="m-0 pt-0 px-3 mobile list-unstyled pb-2">
            <li className={location.pathname === '/' ? 'active' : ''} >
              <Link to={'/'}>Home</Link>
            </li>
            <li className={location.pathname === '/blogs' ? 'active' : ''}>
              <Link to={'/blogs'}>Blogs</Link>
            </li>
            <li>
              <Link to={'/category'}>Category</Link>
            </li>
            <li>
              <Link to={'/authors'}>Authors</Link>
            </li>
          </ul>
        </div>
  </Collapse>
 </header>
 <div style={{height : headerHeight }}></div>
</>
};

export default Header