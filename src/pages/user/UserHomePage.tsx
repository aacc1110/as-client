import React from 'react';
import styled from '@emotion/styled';

import UserHome from '../../components/user/UserHome';
import LayOut from '../../components/LayOut';
import { Route, Switch } from 'react-router';
import PostViewPage from '../post/PostViewPage';

const UserHomePageBlock = styled(LayOut)``;

interface UserHomePageProps {}

function UserHomePage(props: UserHomePageProps) {
  return (
    <UserHomePageBlock>
      <Switch>
        <Route path="/@:useremail/:urlPath">
          <PostViewPage />
        </Route>
        <Route path={['/@:useremail', '/@:useremail/:tab(series|about)']} exact>
          <UserHome />
        </Route>
      </Switch>
    </UserHomePageBlock>
  );
}

export default UserHomePage;
