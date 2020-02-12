import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router';
import UserHomePage from './UserHomePage';
import PostSeriesPage from './PostSeriesPage';
import PostViewPage from '../post/PostViewPage';

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
        <Route path="/@:useremail/series/:urlPath">
          <PostSeriesPage />
        </Route>
        <Route path="/@:useremail/:urlPath">
          <PostViewPage />
        </Route>
      </Switch>
    </UserPageBlock>
  );
}

export default UserPage;
