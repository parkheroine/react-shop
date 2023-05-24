import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import './../App.css';
import {addCart} from "./../store.js"
import { cleanup } from "@testing-library/react";

function Detail(props) {

  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade,setFade]=useState('');
  let dispatch = useDispatch();

  let cart = useSelector((state) => state.cart)
  let product = props.shoes.find(function (x) {
    return x.id == id
  });

  useEffect(()=>{
    let timer=setTimeout(()=>{ setFade('end')},10)
    return()=>{
      clearTimeout(timer)
      setFade('')
    }
  }, [])
  useEffect(() => {
    let a=setTimeout(() => {
      setAlert(false)
    }, 2000)
    return(
      cleanup(a)
    )
  },[]);

  


  return (
    <div className={'container '+'start '+ fade}>
      {
        alert == true
          ? <div className="alert alert-warnig">
            2초 이내 주문시 할인
          </div>
          : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger" onClick={()=>{dispatch(addCart({id: 1, name: 'Red knit',count: 1}))}} >주문하기</button>
        </div>
      </div>


      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabControll tab={tab} />
    </div>
  )
};

function TabControll({ tab }) {
  let [fade,setFade]=useState('')

  useEffect(()=>{
    let timer=setTimeout(()=>{ setFade('end')},10)
    return()=>{
      clearTimeout(timer)
      setFade('')
    }
  }, [tab])

  return (
    <div className={'start '+fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}

export default Detail