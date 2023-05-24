import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import data from './data.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import axios from 'axios';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Heroine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link href="#study">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return <Product shoes={shoes} i={i} key={i} />
                  })}
              </div>
            </div>
            
          </>

        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는 페이지에요</div>} />
      </Routes>

    </div>
  );
}

export default App;

function Product(props) {
  let num = props.i + 1;
  return (
    <div className=''>
      <img src={'https://codingapple1.github.io/shop/shoes' + num + '.jpg'} width="80%"/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
  );
}


