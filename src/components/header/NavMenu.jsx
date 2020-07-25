import React, { useState } from "react";
import styled from "styled-components";

import NavSubMenu from "./NavSubMenu";

const NavMenuWrap = styled.li`
  padding: 20px 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.07em;
  color: #fff;
`;

const NaveMenuTitle = styled.span`
  cursor: pointer;
`;

const NavMenu = ({ title, subMenus }) => {
  const [onFocus, setFocus] = useState(false);
  const handleMouseEnter = () => setFocus(true);
  const handleMouseLeave = () => setFocus(false);

  return (
    <>
      <NavMenuWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NaveMenuTitle>{title}</NaveMenuTitle>
        {onFocus && <NavSubMenu {...{ subMenus, handleMouseEnter, handleMouseLeave }} />}
      </NavMenuWrap>
    </>
  );
};

export default NavMenu;
