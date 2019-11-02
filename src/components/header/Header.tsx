import React from 'react';
import styled from '@emotion/styled';
import { IconLogo } from '../../images/svg';
import { Link } from 'react-router-dom';
import { MdDehaze, MdAccountCircle, MdNoteAdd, MdSearch } from 'react-icons/md';
import palette from '../../styles/palette';

interface HeaderProps {}

const HeaderBlock = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  svg {
    display: flex;
    align-items: center;
    font-size: 1.375rem;
    color: ${palette.gray7};
    cursor: pointer;
    :hover {
      color: ${palette.blue5};
      opacity: 0.7;
    }
  }
`;
const MenuIcon = styled.div`
  width: 3.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  display: inline-flex;
  flex-grow: 2;
  align-items: center;
`;

const UserMenu = styled.div`
  display: inline-flex;
  flex-grow: 3;
  justify-content: flex-end;
  align-items: center;
  transition: 0.125s all ease-in;
  .userIcon {
    svg {
      padding: 0.312rem;
      font-size: 2rem;
    }
  }
  .userMenuIcon {
    svg {
      padding: 0.312rem;
      font-size: 1.5rem;
    }
    padding: 0 16px 0 0;
  }
  padding: 0 16px 0 0;
`;

function Header(props: HeaderProps) {
  return (
    <HeaderBlock>
      <MenuIcon>
        <MdDehaze />
      </MenuIcon>
      <Logo>
        <Link to="/">
          <IconLogo />
        </Link>
      </Logo>
      <UserMenu>
        <div className="userMenuIcon">
          <Link to="write">
            <MdSearch />
          </Link>
        </div>
        <div className="userMenuIcon">
          <Link to="write">
            <MdNoteAdd />
          </Link>
        </div>
        <div className="userIcon">
          <Link to="login">
            <MdAccountCircle />
          </Link>
        </div>
      </UserMenu>
    </HeaderBlock>
  );
}

export default Header;
