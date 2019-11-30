import React from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';
import useUser from '../../lib/hooks/useUser';
import { MdHome, MdSettings, MdExitToApp, MdSettingsPhone, MdPermPhoneMsg } from 'react-icons/md';
import { loginUserThumbnail } from '../../images/img';

const HeaderUserMenuBlock = styled.div`
  position: fixed;
  top: 3rem;
  right: 0;
  margin-right: 1.5rem;
  .userMenu {
    width: 12rem;
    padding: 0.75rem;
    background: ${palette.gray0};
    img {
      display: block;
      height: 3rem;
      width: 3rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
      border-radius: 1.5rem;
      object-fit: cover;
      transition: 0.125s all ease-in;
      margin-right: 0.75rem;
    }
    svg {
      padding: 0.312rem;
      padding-right: 1rem;
      font-size: 1.375rem;
      color: ${palette.gray7};
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${palette.gray8};
  }
  .userMenuItem {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${palette.gray4};
  }
`;

interface HeaderUserMenuProps {}

function HeaderUserMenu(props: HeaderUserMenuProps) {
  const { user } = useUser();
  if (!user) return null;
  return (
    <HeaderUserMenuBlock>
      <div className="userMenu">
        <div className="userInfo">
          <img src={loginUserThumbnail} alt="thumbnail" />
          <div>
            <span>
              <b>{user.name}</b>
              {user.email}sdfsdfsdfsdfsdfsdfsdfsdfsfdsdfsfsfsd
            </span>
          </div>
        </div>
        <div className="userMenuItem">
          <MdHome />
          MY HOME
        </div>
        <div className="userMenuItem">
          <MdPermPhoneMsg />
          고객센터
        </div>
        <div className="userMenuItem">
          <MdSettings />
          설정
        </div>
        <div className="userMenuItem">
          <MdExitToApp />
          로그아웃
        </div>
      </div>
    </HeaderUserMenuBlock>
  );
}

export default HeaderUserMenu;
