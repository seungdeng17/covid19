import React, { useState } from "react";
import styled from "styled-components";

import NavSubMenu from "./NavSubMenu";

const NavMenuWrap = styled.li`
  position: relative;
  padding: 20px 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.07em;
  color: #fff;
  ::after {
    display: block;
    content: "";
    width: 100%;
    height: 5px;
    background: #0d427f;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: right bottom;
    transition: transform 0.24s ease-in-out;
  }
  &.active {
    ::after {
      display: block;
      content: "";
      width: 100%;
      height: 5px;
      background: #0d427f;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: scaleX(1);
      transform-origin: left bottom;
      transition: transform 0.24s ease-in-out;
    }
  }
`;

const NaveMenuTitle = styled.span`
  cursor: pointer;
`;

const NavMenu = ({ title, subMenus }) => {
  const [onFocus, setFocus] = useState(false);
  const handleMouseEnter = () => setFocus(true);
  const handleMouseLeave = () => setFocus(false);

  const navClassName = onFocus ? "active" : "";

  return (
    <>
      <NavMenuWrap className={navClassName} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NaveMenuTitle>{title}</NaveMenuTitle>
        {onFocus && <NavSubMenu {...{ subMenus, handleMouseEnter, handleMouseLeave }} />}
      </NavMenuWrap>
    </>
  );
};

export default NavMenu;
