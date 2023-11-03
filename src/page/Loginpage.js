import React from "react";
import styled from "styled-components";

import {useNavigate} from "react-router-dom";

const Loginpage = ({setAuthenticate}) => {
    const LoginWrap = styled.div`
      padding : 3rem;
      width : 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
    `
    const Span = styled.span`
      display: inline-block;
      width : 100%;
      text-align: left;
      margin-bottom: 0.3rem;
    `
    const Input = styled.input`
      width : 100%;
      margin-bottom: 1.3rem;
      height : 25px;
      border: none;
      border-bottom: 1px solid;
    `
    const Button = styled.button`
      border: none;
      padding : 0.5rem 1.7rem;
    `

    const nav = useNavigate()
    const login = () => {
        console.log('로그인해주라ㅣ!!')
        setAuthenticate(true);
        nav('/')
    }

    return (
        <LoginWrap>
            <Span>Email address</Span>
            <Input type="email" required={true} placeholder='Enter Email'/>
            <Span>Password</Span>
            <Input type="password" required={true} placeholder='Password'/>
            <Button onClick={()=> {login()}}>Login</Button>
        </LoginWrap>
    )
}

export default Loginpage;