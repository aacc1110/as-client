import React from 'react';
import styled from 'styled-components';
import PostTrend from '../../components/posts/PostsTrend';

interface PostTrendPageProps {}

const PostTrendPageBlock = styled.div``;

function PostTrendPage(props: PostTrendPageProps) {
  return (
    <PostTrendPageBlock>
      <PostTrend />
    </PostTrendPageBlock>
  );
}

export default PostTrendPage;
