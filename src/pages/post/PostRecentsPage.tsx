import React from 'react';
import styled from '@emotion/styled';
import PostRecents from '../../components/posts/PostRecents';

const PostRecentsPageBlock = styled.div``;

interface PostRecentsPageProps {}

function PostRecentsPage(props: PostRecentsPageProps) {
  return (
    <PostRecentsPageBlock>
      <PostRecents />
    </PostRecentsPageBlock>
  );
}

export default PostRecentsPage;
