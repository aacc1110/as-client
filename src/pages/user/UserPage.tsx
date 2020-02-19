import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router';
import UserHomePage from './UserHomePage';
import PostViewPage from './PostViewPage';

const UserPageBlock = styled.div``;

interface UserPageProps {}

function UserPage(props: UserPageProps) {
  return (
    <UserPageBlock>
      <Switch>
        <Route
          path={['/@:useremail', '/@:useremail/:tab(posts|series|about)']}
          exact
        >
          <UserHomePage />
        </Route>
        {/* <Route path="/@:useremail/series/:urlPath">
          <PostViewPage />
        </Route> */}
        <Route path={['/@:useremail/:urlPath', '/@:useremail/series/:urlPath']}>
          <PostViewPage />
        </Route>
      </Switch>
    </UserPageBlock>
  );
}

export default UserPage;
