import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdFiberNew, MdTrendingUp, MdSubscriptions, MdStar } from 'react-icons/md';
import palette from '../../styles/palette';

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.gray8};

  width: 100%;
  font-size: 0.625rem;
  padding: 16px 0 14px 0;
  text-decoration: none;
  transition: 0.125s all ease-in;
  :hover {
    background: ${palette.gray3};
  }
  svg {
    font-size: 1.375rem;
  }
  &.active {
    color: ${palette.blue6};
    font-weight: bold;
  }
`;
interface MenuProps {}
function Menu(props: MenuProps) {
  return (
    <MenuBlock>
      <MenuItem
        to="/trend"
        activeClassName="active"
        isActive={(match, location) => {
          if (!match) return false;
          return ['/', '/trend'].indexOf(location.pathname) !== -1;
        }}
      >
        <MdTrendingUp />
        인기
      </MenuItem>
      <MenuItem to="/recent" activeClassName="active">
        <MdFiberNew />
        최신
      </MenuItem>
      <MenuItem to="/subscript" activeClassName="active">
        <MdSubscriptions />
        구독
      </MenuItem>
      <MenuItem to="/tag" activeClassName="active">
        <MdStar />
        인기테그
      </MenuItem>
    </MenuBlock>
  );
}

export default Menu;
