import React from 'react';
import styled from 'styled-components';
import PostTrends from '../../components/posts/PostTrends';

interface PostTrendsPageProps {}

const PostTrendsPageBlock = styled.div``;

function PostTrendsPage(props: PostTrendsPageProps) {
  return (
    <PostTrendsPageBlock>
      <PostTrends />
    </PostTrendsPageBlock>
  );
}

export default PostTrendsPage;
