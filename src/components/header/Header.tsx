import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../images/svg';
import { NavLink } from 'react-router-dom';
import Button from '../../styles/Button';

interface HeaderProps {}

const HeaderBlock = styled.div`
  height: 3rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    margin-left: 1rem;
    width: 700px;
  }
`;

function Header(props: HeaderProps) {
  return (
    <HeaderBlock>
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
    </HeaderBlock>
  );
}

export default Header;
