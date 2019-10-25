import React from 'react';
import { Route } from 'react-router';
import PostTrendPage from './PostTrendPage';
import LayOut from '../components/LayOut';

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <LayOut>
      <Route path="/" component={PostTrendPage} />
    </LayOut>
  );
}

export default HomePage;
