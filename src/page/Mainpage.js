import React from "react";
import {useEffect} from "react";

import ProductCard from "../component/ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

import {productAction} from '../redux/actions/productAction'
import {useDispatch, useSelector} from "react-redux";
import productReducer from "../redux/reducer/productReducer";

const Mainpage = () => {
    const productList = useSelector(state=> state.productReducer.productList);
    let [query] = useSearchParams()

    const dispatch = useDispatch()



    useEffect(()=> {
        const getProducts = () => {
            let searchQuery = query.get('q') || ''
            dispatch(productAction.getProducts(searchQuery))
        }
        getProducts()
    }, [query.get('q')])

    return (
        <Container>
            <Row>
                {
                    productList?.map((item, idx) => {
                      return(
                       <Col key={idx} lg={3} md={6} sm={12}>
                            <ProductCard  item={item} />
                       </Col>
                      )
                    })
                }
            </Row>
        </Container>
    )
}

export default Mainpage;