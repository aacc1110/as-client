import React from 'react';
import styled from '@emotion/styled';

import UserHome from '../../components/user/UserHome';
import LayOut from '../../components/LayOut';

const UserHomePageBlock = styled(LayOut)``;

interface UserHomePageProps {}

function UserHomePage(props: UserHomePageProps) {
  return (
    <UserHomePageBlock>
      <UserHome />
    </UserHomePageBlock>
  );
}

export default UserHomePage;
