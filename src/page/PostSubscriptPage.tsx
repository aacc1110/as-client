import React from 'react';
import styled from '@emotion/styled';
import PostSubscript from '../components/post/PostSubscript';

const PostSubscriptPageBlock = styled.div``;

interface PostSubscriptPageProps {}

function PostSubscriptPage(props: PostSubscriptPageProps) {
  return (
    <PostSubscriptPageBlock>
      <PostSubscript />
    </PostSubscriptPageBlock>
  );
}

export default PostSubscriptPage;
