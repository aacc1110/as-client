import React from 'react';
import { Route } from 'react-router';

import LayOut from '../components/LayOut';

import PostTrendsPage from './post/PostTrendsPage';
import PostRecentsPage from './post/PostRecentsPage';
import PostSubscriptsPage from './post/PostSubscriptsPage';
import PostMainPage from './post/PostMainPage';

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <LayOut>
      <Route path={['/']} exact>
        <PostMainPage />
      </Route>
      <Route path="/trends" exact>
        <PostTrendsPage />
      </Route>
      <Route path="/recents" exact>
        <PostRecentsPage />
      </Route>
      <Route path="/subscripts" exact>
        <PostSubscriptsPage />
      </Route>
      {/* <Route path="/tags" exact>
        <TagPage />
      </Route> */}
    </LayOut>
  );
}

export default HomePage;
