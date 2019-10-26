import React from 'react';
import styled from '@emotion/styled';
import { Logo } from '../../images/svg';
import { NavLink } from 'react-router-dom';
import Button from '../../styles/Button';
import { MdDehaze } from 'react-icons/md';
import palette from '../../styles/palette';

interface HeaderProps {}

const HeaderBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;

  svg {
    font-size: 1.785rem;
    color: ${palette.gray7};
    cursor: pointer;
    }
  }
`;
const HeaderContent = styled.div`
  width: calc(100% - 4rem);
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    width: 300px;
  }
`;

function Header(props: HeaderProps) {
  return (
    <HeaderBlock>
      <MenuIcon>
        <MdDehaze />
      </MenuIcon>
      <HeaderContent>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div>
          <input type="search" name="search" className="search" />
        </div>
        <div>
          <Button size="DEFAULT" color="blue" to="login">
            로그인
          </Button>
        </div>
      </HeaderContent>
    </HeaderBlock>
  );
}

export default Header;
