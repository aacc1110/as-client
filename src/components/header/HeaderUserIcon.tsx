import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { userThumbnail, loginUserThumbnail } from '../../images/img';
import useUser from '../../lib/hooks/useUser';
import useBoolean from '../../lib/hooks/useBoolean';
import HeaderUserMenu from './HeaderUserMenu';
import { useHistory } from 'react-router';

const HeaderUserIconBlock = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
    border-radius: 1.25rem;
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
  const { user } = useUser();
  const { value, show } = useBoolean(false);
  const history = useHistory();

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
