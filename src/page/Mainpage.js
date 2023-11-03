import React from "react";
import {useEffect, useState} from "react";

import ProductCard from "../component/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";


const Mainpage = () => {
    const [productList, setProductList] = useState([])
    let [query, setQuery] = useSearchParams()

    const getProducts = async () => {
        let searchQuery = query.get('q') || ''
        let url = `http://localhost:3030/products?q=${searchQuery}`
        let res = await fetch(url)
        let data = await res.json()
        setProductList(data)
    }

    useEffect(()=> {
        getProducts()
    }, [query.get('q')])

    return (
        <Container>
            <Row>
                {
                    productList.map((menu, idx) => {
                      return(
                       <Col key={idx} lg={3} md={6} sm={12}>
                            <ProductCard  item={menu} />
                       </Col>
                      )
                    })
                }
            </Row>
        </Container>
    )
}

export default Mainpage;