import React from 'react';
import { Route } from 'react-router';

import LayOut from '../components/LayOut';

import TagPage from './tags/TagPage';
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
      <Route path="/trend" exact>
        <PostTrendsPage />
      </Route>
      <Route path="/recent" exact>
        <PostRecentsPage />
      </Route>
      <Route path="/subscript" exact>
        <PostSubscriptsPage />
      </Route>
      <Route path="/tag" exact>
        <TagPage />
      </Route>
    </LayOut>
  );
}

export default HomePage;
