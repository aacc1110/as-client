import React from 'react';
import styled from '@emotion/styled';
import PostsRecent from '../../components/posts/PostsRecent';

const PostRecentPageBlock = styled.div``;

interface PostRecentPageProps {}

function PostRecentPage(props: PostRecentPageProps) {
  return (
    <PostRecentPageBlock>
      <PostsRecent />
    </PostRecentPageBlock>
  );
}

export default PostRecentPage;
