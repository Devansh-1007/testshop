import React,{useState,useEffect} from "react";
import axios from 'axios';
import ProductScreen from "./ProductScreen";
import { Row, Col } from "react-bootstrap";
const HomeScreen = () => {
  const [Products,setProducts] =useState([]);
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const {data} = await axios.get('/products');
      setProducts(data);
    };
    fetchProducts();
  },[])
  return (
    <>
      
        <Row>
          {Products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
    </>
  );
};

export default HomeScreen;
