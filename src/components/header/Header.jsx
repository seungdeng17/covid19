import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 1180px;
  margin: 0 auto;
  a {
    font-size: 23px;
    line-height: 60px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <h1>
        <Link to="/">코로나바이러스감염증-19(COVID-19)</Link>
      </h1>
    </HeaderWrap>
  );
};

export default Header;
