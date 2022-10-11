import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main } from "./view/Main";
import styled from "styled-components";
import media from "./constants/media";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./view/Login";
const SMainContainer = styled.div`
  .container {
    width: 1024px;
    margin: 0 auto;
  }
  ${media.MOBILE} {
    .container {
      width: 100%;
      .main {
        width: 100%;
        padding: 50px 30px;
        box-sizing: border-box;
        .main-logo {
          width: 180px;
          margin: 20px auto;
        }
        .banner {
          position: absolute;
          bottom: 140px;
          width: 85%;
        }
      }
    }
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
