import React from "react";
import SideSearch from "./SideSearch";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Header = ({authenticate, setAuthenticate}) => {
    const HeaderWrap = styled.header`
      width: 100%;
      height : 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      position :relative;
    `
    const TitleWrap = styled.div`
      width : 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `
    const Header = styled.h1`
      cursor: pointer;
    `
    const BtnWrap = styled.nav`
      display: flex;
      gap : 0.5rem;
    `
    const Button =styled.button`
      list-style-type : none;
      border : none;
      background-color: transparent;
      cursor: pointer;
    `
    const naviList = ['여성', 'Divided', '남성', '신생아/유아', 'kids', '흐앤므홈', 'Sale', '지속가능성', ];
    const nav = useNavigate()
    const goToMain = () => {
        nav('/')
    }
    return (
        <HeaderWrap>
            <TitleWrap>
                <Header onClick={()=> goToMain()}>
                      흐앤므입니다
                </Header>
                <BtnWrap>
                    {
                        naviList.map((item, idx) => {
                          return  <Button key={idx}>{item}</Button>
                        })
                    }
                </BtnWrap>
            </TitleWrap>
            <SideSearch authenticate={authenticate} setAuthenticate={setAuthenticate} />
        </HeaderWrap>
    )
}

export default Header;