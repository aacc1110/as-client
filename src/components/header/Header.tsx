import React from 'react';
import styled from '@emotion/styled';
import { IconLogo } from '../../images/svg';
import { useHistory } from 'react-router-dom';
import { MdDehaze, MdSearch, MdClear, MdCreate } from 'react-icons/md';

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
    font-size: 1.375rem;
    color: ${palette.gray7};
    cursor: pointer;
    &:hover {
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
`;
const UserMenuIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    padding: 0.312rem;
    margin-right: 0.2rem;
    font-size: 1.5rem;
  }
`;
const SearchInput = styled.input`
  display: block;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 1.5rem;
  border: 1px solid black;
`;

function Header(props: HeaderProps) {
  const history = useHistory();
  const { onVisible } = useUser();
  const { value, show } = useBoolean(false);

  return (
    <HeaderBlock>
      <MenuIcon>
        <MdDehaze onClick={onVisible} />
      </MenuIcon>
      <Logo>
        <IconLogo onClick={() => history.push('/')} />
      </Logo>
      <UserMenu>
        <UserMenuIcon>
          {value && <SearchInput type="search" />}
          {value ? <MdClear onClick={show} /> : <MdSearch onClick={show} />}
        </UserMenuIcon>
        <UserMenuIcon>
          <MdCreate onClick={() => history.push('/write')} />
        </UserMenuIcon>
      </UserMenu>
      <HeaderUserIcon />
    </HeaderBlock>
  );
}

export default Header;
