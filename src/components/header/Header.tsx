import React from 'react';
import styled from '@emotion/styled';
import { IconLogo } from '../../images/svg';
import { Link } from 'react-router-dom';
import { MdDehaze, MdAccountCircle, MdSearch, MdNoteAdd, MdClear } from 'react-icons/md';

import palette from '../../styles/palette';
import useBoolean from '../../lib/hooks/useBoolean';
import useUser from '../../lib/hooks/useUser';
import HeaderUserIcon from './HeaderUserIcon';

interface HeaderProps {}

const HeaderBlock = styled.div`
  position: fixed;
  display: inline-flex;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: ${palette.gray0};

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
  flex-grow: 1;
  align-items: center;
`;

const UserMenu = styled.div`
  display: inline-flex;
  flex-grow: 4;
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

const SearchInput = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 1rem;
  border: 1px solid black;
`;

function Header(props: HeaderProps) {
  const { onVisible, user } = useUser();
  const { value, show } = useBoolean(false);

  if (user) {
    // console.log(typeof user.userprofile !== undefined ? user.userprofile[0].id : undefined);
    console.log('user', user.email, user.userProfile.id);
  }

  return (
    <HeaderBlock>
      <MenuIcon>
        <MdDehaze onClick={onVisible} />
      </MenuIcon>
      <Logo>
        <Link to="/">
          <IconLogo />
        </Link>
      </Logo>
      <UserMenu>
        {value && <SearchInput type="search" />}
        <div className="userMenuIcon">
          {value ? <MdClear onClick={show} /> : <MdSearch onClick={show} />}
        </div>
        <div className="userMenuIcon">
          <Link to="write">
            <MdNoteAdd />
          </Link>
        </div>
        <div className="userIcon">
          <Link to="login">
            <HeaderUserIcon user={user} />
          </Link>
        </div>
      </UserMenu>
    </HeaderBlock>
  );
}

export default Header;
