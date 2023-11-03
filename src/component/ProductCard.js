import React from "react";
import '../App.css'
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {
    const nav = useNavigate();
    const showDetail = () => {
        nav(`/detail/${item.id}`)
    }
    return (
        <div className='Card' onClick={() =>{ showDetail() }}>
            <img src={item?.img} alt="product-image"/>
            <div>{!! item?.choice ? 'Conscious choice': '' }</div>
            <div>{item?.title}</div>
            <div>₩ {item?.price}</div>
            <div>{!!item?.new ? '신제품' : ''}</div>
        </div>
    )
}

export default ProductCard;