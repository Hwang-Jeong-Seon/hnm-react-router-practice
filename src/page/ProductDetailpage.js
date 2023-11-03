import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

const ProductDetailpage = () => {
    const [productDetail, setProductDetail] = useState({});
    const params = useParams()
    const getProductDetail = async () => {
        let url = `http://localhost:3030/products/${params.id}`
        let res = await fetch(url)
        let data = await res.json()
        setProductDetail(data)
    }
    useEffect(()=> {
        getProductDetail()
    }, [])
    return (
        <Container>
            <Row>
                <Col lg={5}>
                    <img src={productDetail?.img} alt="product-detail"/>
                </Col>
                <Col lg={7}>
                    <h2>{productDetail?.title}</h2>
                    <p>₩ {productDetail?.price}</p>
                    <button>담기</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailpage;