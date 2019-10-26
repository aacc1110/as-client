import React from 'react';
import { Route } from 'react-router';
import PostTrendPage from './PostTrendPage';
import LayOut from '../components/LayOut';
import PostRecentPage from './PostRecentPage';
import PostSubscriptPage from './PostSubscriptPage';

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <LayOut>
      <Route path={['/', '/trend']} exact>
        <PostTrendPage />
      </Route>
      <Route path="/recent" exact>
        <PostRecentPage />
      </Route>
      <Route path="/subscript" exact>
        <PostSubscriptPage />
      </Route>
    </LayOut>
  );
}

export default HomePage;
