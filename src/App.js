import './App.css';
import React, {useEffect} from "react";
import styled from "styled-components";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./layout/Header";
import Mainpage from "./page/Mainpage";
import Loginpage from "./page/Loginpage";
import PrivateRoute from "./route/PrivateRoute";

// router
import { Routes, Route} from "react-router-dom";

function App() {
  const Div = styled.div`
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const [authenticate, setAuthenticate] = useState(false);
    useEffect(() => {
        console.log('aaa',authenticate)
    }, [authenticate]);
  return (
    <>
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Div>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/login' element={<Loginpage setAuthenticate={setAuthenticate}/>}/>
          <Route path='/detail/:id' element={<PrivateRoute  authenticate={authenticate}/>}/>
        </Routes>
      </Div>
    </>
  );
}

export default App;
