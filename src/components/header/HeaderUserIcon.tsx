import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { userThumbnail, loginUserThumbnail } from '../../images/img';
import useUser from '../../lib/hooks/useUser';
import useBoolean from '../../lib/hooks/useBoolean';
import HeaderUserMenu from './HeaderUserMenu';
import { useHistory } from 'react-router';
import useMeInfo from './hooks/useMeInfo';
import core, { setUser } from '../../modules/core';
import { useDispatch } from 'react-redux';

const HeaderUserIconBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1.5rem 0 1rem;
  img {
    display: block;
    height: 2.2rem;
    width: 2.2rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
    border-radius: 1.1rem;
    object-fit: cover;
    transition: 0.125s all ease-in;
    cursor: pointer;
    &:hover {
      img {
        box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
        opacity: 0.7;
      }
    }
  }
`;

interface HeaderUserIconProps {}

function HeaderUserIcon(props: HeaderUserIconProps) {
  const { value, show } = useBoolean(false);
  const history = useHistory();
  const { user, notUser } = useUser();
  const xlg: string = document.cookie.replace(/(?:(?:^|.*;\s*)xlg\s*=\s*([^;]*).*$)|^.*$/, '$1');

  console.log('xlg:', xlg);

  useEffect(() => {
    if (xlg && user) {
      localStorage.removeItem('CurrentUser');
      notUser();
    }
  }, [notUser, user, xlg]);

  const onClick = useCallback(() => {
    if (!user) {
      history.push('login');
      return;
    }
    show();
  }, [history, show, user]);

  return (
    <HeaderUserIconBlock onClick={onClick}>
      <img src={user ? loginUserThumbnail : userThumbnail} alt="thumbnail" />
      {user && value ? <HeaderUserMenu /> : null}
    </HeaderUserIconBlock>
  );
}

export default HeaderUserIcon;
