import React from 'react';
import styled from '@emotion/styled';

import UserHome from '../../components/user/UserHome';
import LayOut from '../../components/LayOut';
import { Route, useParams } from 'react-router';
import UserHomeMenu from '../../components/user/UserHomeMenu';
import UserPostTab from '../../components/user/UserPostTab';
import UserSeriesTab from '../../components/user/UserSeriesTab';
import UserAboutTab from '../../components/user/UserAboutTab';
import useUserInfo from '../../components/user/hooks/useUserInfo';
import UserMainTab from '../../components/user/UserMainTab';

const UserHomePageBlock = styled(LayOut)``;

interface UserHomePageProps {}

function UserHomePage(props: UserHomePageProps) {
  const { useremail, tab } = useParams();
  const { user, loading } = useUserInfo(useremail);

  if (!user || loading) return null;
  return (
    <UserHomePageBlock>
      <UserHome username={user.name} about={user.userProfile.about} />
      <UserHomeMenu useremail={useremail} tab={tab} />
      <Route path="/@:useremail" exact>
        <UserMainTab user={user} />
      </Route>
      <Route path="/@:useremail/posts">
        <UserPostTab posts={user.posts} />
      </Route>
      <Route path="/@:useremail/series">
        <UserSeriesTab />
      </Route>
      <Route path="/@:useremail/about">
        <UserAboutTab />
      </Route>
    </UserHomePageBlock>
  );
}

export default UserHomePage;
