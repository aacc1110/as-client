import React from 'react';
import { Route } from 'react-router';
import PostTrendPage from './post/PostTrendPage';
import LayOut from '../components/LayOut';
import PostRecentPage from './post/PostRecentPage';
import PostSubscriptPage from './post/PostSubscriptPage';
import MainPage from './main/MainPage';
import TagPage from './tags/TagPage';

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <LayOut>
      <Route path={['/']} exact>
        <MainPage />
      </Route>
      <Route path="/trend" exact>
        <PostTrendPage />
      </Route>
      <Route path="/recent" exact>
        <PostRecentPage />
      </Route>
      <Route path="/subscript" exact>
        <PostSubscriptPage />
      </Route>
      <Route path="/tag" exact>
        <TagPage />
      </Route>
    </LayOut>
  );
}

export default HomePage;
