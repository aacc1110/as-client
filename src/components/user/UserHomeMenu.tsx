import React from 'react';
import styled from '@emotion/styled';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UserHomeMenuBlock = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
  .userMenu-wrapper {
    display: inline-flex;
    align-items: center;
    width: 900px;
    height: 3rem;
    svg {
      font-size: 1.2rem;
      padding-left: 2rem;
    }
  }
`;
const UserHomeMenuItem = styled(Link)`
  font-size: 0.875rem;

  color: inherit;
  text-decoration: none;

  & + & {
    padding-left: 2rem;
  }
`;
interface UserHomeMenuProps {}

function UserHomeMenu(props: UserHomeMenuProps) {
  return (
    <UserHomeMenuBlock>
      <div className="userMenu-wrapper">
        <UserHomeMenuItem to="">홈</UserHomeMenuItem>
        <UserHomeMenuItem to="">포스트</UserHomeMenuItem>
        <UserHomeMenuItem to="">시리즈</UserHomeMenuItem>
        <UserHomeMenuItem to="">정보</UserHomeMenuItem>
        <MdSearch />
      </div>
    </UserHomeMenuBlock>
  );
}

export default UserHomeMenu;
