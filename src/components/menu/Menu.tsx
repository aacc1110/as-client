import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdFiberNew, MdTrendingUp, MdSubscriptions } from 'react-icons/md';
import palette from '../../styles/palette';

interface MenuProps {}

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.gray8};
  text-decoration: none;
  width: 100%;
  height: 3rem;
  font-size: 0.5rem;
  margin-bottom: 2rem;
  transition: 0.125s all ease-in;
  svg {
    font-size: 1.785rem;
  }
  &.active {
    color: ${palette.blue6};
    font-weight: bold;
  }
`;

function Menu(props: MenuProps) {
  return (
    <MenuBlock>
      <MenuItem
        to="/trend"
        activeClassName="active"
        isActive={(match, location) => {
          if (!match) return false;
          return ['/', '/trend'].includes(location.pathname);
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
    </MenuBlock>
  );
}

export default Menu;
