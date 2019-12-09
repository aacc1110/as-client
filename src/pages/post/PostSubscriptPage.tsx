import React from 'react';
import styled from '@emotion/styled';
import PostsSubscript from '../../components/posts/PostsSubscript';

const PostSubscriptPageBlock = styled.div``;

interface PostSubscriptPageProps {}

function PostSubscriptPage(props: PostSubscriptPageProps) {
  return (
    <PostSubscriptPageBlock>
      <PostsSubscript />
    </PostSubscriptPageBlock>
  );
}

export default PostSubscriptPage;
