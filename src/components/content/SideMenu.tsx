import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdFiberNew, MdTrendingUp, MdSubscriptions, MdStar } from 'react-icons/md';
import palette from '../../styles/palette';

const SideMenuBlock = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 3rem;
  width: 3.5rem;
  height: 100%;
  background-color: ${palette.gray0};
`;
const SideMenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.gray7};
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
    :hover {
      color: ${palette.blue5};
      opacity: 0.7;
    }
  }
  &.active {
    color: ${palette.blue6};
    font-weight: bold;
  }
`;
interface SideMenuProps {}

function SideMenu(props: SideMenuProps) {
  return (
    <SideMenuBlock>
      <SideMenuItem
        to="/trend"
        activeClassName="active"
        isActive={(match, location) => {
          if (!match) return false;
          return ['/', '/trend'].indexOf(location.pathname) !== -1;
        }}
      >
        <MdTrendingUp />
        인기
      </SideMenuItem>
      <SideMenuItem to="/recent" activeClassName="active">
        <MdFiberNew />
        최신
      </SideMenuItem>
      <SideMenuItem to="/subscript" activeClassName="active">
        <MdSubscriptions />
        구독
      </SideMenuItem>
      <SideMenuItem to="/tag" activeClassName="active">
        <MdStar />
        인기테그
      </SideMenuItem>
    </SideMenuBlock>
  );
}

export default SideMenu;