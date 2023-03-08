import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProductById() {
  const params = useParams();
  //console.log(params);
  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:3001/api/productos/detail/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
        //console.log(product)
        setProductData(product.data);
        
        
        //console.log(product.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(productData.Modelo);
  
  

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{productData.nombre}</Card.Title>
        <Card.Text>{productData.descripcion}</Card.Text>
      </Card.Body>
     
      <Card.Body>
        <Card.Link href="/products">Productos</Card.Link>
        <br />
        <Card.Link href="/">Home</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductById;