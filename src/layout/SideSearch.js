import React from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";



const SideSearch = ({authenticate, setAuthenticate}) => {
    const SearchWrapper = styled.div`
      //background-color: purple;
      width: 200px;
      padding :0 1rem;
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      right : 0;
      top : 0;
    `
    const UserAuthBtn = styled.strong`
      display: inline-block;
      width: 100%;
      cursor: pointer;
      text-align: right;
      margin-top: 1rem;
    `
    const Input = styled.input`
      width: 100%;
      height : 30px;
      border : none;
      border-bottom: solid 2px;
      bottom : 0;
    `
    const nav = useNavigate()

    const goToLogin = ()=>{
        setAuthenticate(false)
        nav('/login')
    }

    const activeEnter = async (e) => {
        if(e.key !== "Enter") {
            return;
        }
        // let url=`http://localhost:3030/products?title=${e.target.value}`
        // let res = await fetch(url)https://github.com/Hwang-Jeong-Seon/hnm-react-router-practice
        // let data = await res.json()
        // console.log(data)
        // 확실히,, 가져온 리스트 바로 뿌려주려면 페이지 이렇게 이동시켜줘버리는게 젤 나은듯
        nav(`/?q=${e.target.value}`)
    }


    return (
        <SearchWrapper >
            <UserAuthBtn onClick={() => {goToLogin()}}>{!!authenticate ? '로그아웃' : '로그인'}</UserAuthBtn>
            <Input
                type="text"
                placeholder="제품검색"
                onKeyDown={(e) => {activeEnter(e)}}
            />
        </SearchWrapper>
    )
}

export default SideSearch;