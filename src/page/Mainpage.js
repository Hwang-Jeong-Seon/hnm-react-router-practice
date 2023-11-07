import React from "react";
import {useEffect} from "react";

import ProductCard from "../component/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

import {productAction} from '../redux/actions/productAction'
import {useDispatch, useSelector} from "react-redux";

const Mainpage = () => {
   const productList = useSelector(state=> state.productList);
    let [query, setQuery] = useSearchParams()

    const dispatch = useDispatch()

    const getProducts = () => {
        let searchQuery = query.get('q') || ''
        dispatch(productAction.getProducts(searchQuery))
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