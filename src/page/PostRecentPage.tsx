import React from 'react';
import styled from '@emotion/styled';
import PostRecent from '../components/post/PostRecent';

const PostRecentPageBlock = styled.div``;

interface PostRecentPageProps {}

function PostRecentPage(props: PostRecentPageProps) {
  return (
    <PostRecentPageBlock>
      <PostRecent />
    </PostRecentPageBlock>
  );
}

export default PostRecentPage;
