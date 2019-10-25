import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdFiberNew, MdTrendingUp, MdSubscriptions } from 'react-icons/md';
import palette from '../../styles/palette';

interface MenuProps {}

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  color: ${palette.gray8};

  height: 3rem;
`;

function Menu(props: MenuProps) {
  return (
    <MenuBlock>
      <MenuItem to="">
        <MdTrendingUp />
        인기
      </MenuItem>
      <MenuItem to="">
        <MdFiberNew />
        최신
      </MenuItem>
      <MenuItem to="">
        <MdSubscriptions />
        구독
      </MenuItem>
    </MenuBlock>
  );
}

export default Menu;
