import React from "react";
import styled from "styled-components";

import NavMenu from "./NavMenu";

import headerNavData from "@data/headerNav.json";

const HeaderNavWrap = styled.div`
  position: absolute;
  background-color: #0b9bc9;
  width: 100%;
  left: 0;
  color: #fff;
`;

const HeaderNavInner = styled.div`
  width: 1180px;
  height: auto;
  margin: 0 auto;
`;

const NavMenuListContainer = styled.ul`
  display: flex;
`;

const HeaderNav = () => {
  const navMenuList = headerNavData.menus.map((data) => <NavMenu key={data.id} title={data.title} subMenus={data.subMenus} />);

  return (
    <HeaderNavWrap>
      <HeaderNavInner>
        <NavMenuListContainer>{navMenuList}</NavMenuListContainer>
      </HeaderNavInner>
    </HeaderNavWrap>
  );
};

export default HeaderNav;
