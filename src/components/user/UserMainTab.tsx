import React from 'react';
import styled from '@emotion/styled';
import { User } from '../../lib/graphql/user';

const UserMainTabBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
  .main-wrapper {
    display: inline-flex;
    align-items: center;
    width: 1000px;
  }
`;

interface UserMainTabProps {
  user: User;
}

function UserMainTab({ user }: UserMainTabProps) {
  return (
    <UserMainTabBlock>
      <div className="main-wrapper">{JSON.stringify(user)}</div>
    </UserMainTabBlock>
  );
}

export default UserMainTab;
