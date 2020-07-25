import React from "react";
import styled from "styled-components";

const NavSubMenuWarp = styled.div`
  position: absolute;
  z-index: 10;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #fff;

  overflow: hidden;
  animation-name: subMenu;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  transform-origin: top;
  @keyframes subMenu {
    0% {
      max-height: 0;
      border-bottom: 3px solid #fff;
    }
    100% {
      max-height: 10em;
      border-bottom: 3px solid #007499;
    }
  }
`;

const SubMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1180px;
  margin: 0 auto;
  background: #fff;
  padding: 16px 24px;
`;

const SubMenu = styled.li`
  display: block;
  font-size: 15px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.064em;
  color: #fff;
  padding: 8px 16px;
  margin: 8px;
  width: 180px;
  background-color: #13669b;
  cursor: pointer;
  :hover {
    background-color: #008bb8;
  }
`;

const NavSubMenu = ({ subMenus, handleMouseEnter }) => {
  const subMenuList = subMenus.map((data) => {
    return <SubMenu key={data.title}>{data.title}</SubMenu>;
  });

  return (
    <NavSubMenuWarp onMouseEnter={handleMouseEnter}>
      <SubMenuList>{subMenuList}</SubMenuList>
    </NavSubMenuWarp>
  );
};

export default NavSubMenu;
