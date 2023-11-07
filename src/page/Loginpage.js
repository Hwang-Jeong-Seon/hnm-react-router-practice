import React from "react";
import styled from "styled-components";

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginAction} from "../redux/actions/loginAction";
import {useState} from "react";

const Loginpage = ({setAuthenticate}) => {
    const LoginWrap = styled.form`
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
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const login = (event) => {
        event.preventDefault();
        console.log('로그인해주라ㅣ!!')
        // setAuthenticate(true);
        dispatch(loginAction.login(id, pwd))
        nav('/')
    }

    return (
        <LoginWrap onSubmit={(event)=> {login(event)}}>
            <Span>Email address</Span>
            <Input
                type="text"
                placeholder='Enter Email'
                onChange={(event)=> setId(event.target.value)}
            />
            <Span>Password</Span>
            <Input
                type="password"
                placeholder='Password'
                onChange={(event)=> setPwd(event.target.value)}
            />
            <Button type='submit'>Login</Button>
        </LoginWrap>
    )
}

export default Loginpage;