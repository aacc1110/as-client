import React from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';
import useUser from '../../lib/hooks/useUser';
import { MdHome, MdSettings, MdExitToApp, MdPermPhoneMsg } from 'react-icons/md';
import { loginUserThumbnail } from '../../images/img';
import { Link } from 'react-router-dom';
import useLogin from '../auth/hook/useLogin';

const HeaderUserMenuBlock = styled.div`
  position: fixed;
  top: 3rem;
  right: 0;
  margin-right: 1.5rem;
  width: 10rem;
  padding: 0.75rem;
  background: ${palette.gray0};
`;
const UserInfo = styled.div`
  border-bottom: 1px solid ${palette.gray8};
  div {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 0.2rem;
    img {
      display: block;
      height: 3rem;
      width: 3rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
      border-radius: 1.5rem;
      object-fit: cover;
      transition: 0.125s all ease-in;
      cursor: none;
    }
  }
  span {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    margin-left: 0.35rem;
    word-break: break-all;
  }
`;
const UserMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.65rem;
  color: ${palette.gray7};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${palette.gray4};
  text-decoration: none;

  svg {
    padding: 0.312rem;
    padding-right: 0.5rem;
    font-size: 0.875rem;
    color: ${palette.gray7};
  }
  :hover {
    background: ${palette.gray3};
    color: ${palette.blue5};
    opacity: 0.8;
  }
`;

interface HeaderUserMenuProps {}

function HeaderUserMenu(props: HeaderUserMenuProps) {
  const { user } = useUser();
  const { logout } = useLogin();
  console.log(logout);
  if (!user) return null;

  const onLogout = async () => {
    console.log('logout');
    await logout()
      .then(response => {
        if (!response.data) return false;
        console.log('logout data', response.data);
        localStorage.removeItem('CurrentUser');
        document.location.href = '/';
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <HeaderUserMenuBlock>
      <UserInfo>
        <div>
          <img src={loginUserThumbnail} alt="thumbnail" />
          <span>
            <b>{user.name}</b>
          </span>
        </div>
        <span>{user.email}</span>
      </UserInfo>
      <UserMenuItem to={`@${user.email}`}>
        <MdHome />
        MY HOME
      </UserMenuItem>
      <UserMenuItem to="">
        <MdSettings />
        설정
      </UserMenuItem>
      <UserMenuItem to="">
        <MdPermPhoneMsg />
        고객센터
      </UserMenuItem>
      <UserMenuItem to="" onClick={onLogout}>
        <MdExitToApp />
        로그아웃
      </UserMenuItem>
    </HeaderUserMenuBlock>
  );
}

export default HeaderUserMenu;
