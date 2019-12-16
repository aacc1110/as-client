import React from 'react';
import styled from '@emotion/styled';
import PostMain from '../../components/posts/PostMain';

const PostMainPageBlock = styled.div``;

interface PostMainPageProps {}

function PostMainPage(props: PostMainPageProps) {
  return (
    <PostMainPageBlock>
      <PostMain />
    </PostMainPageBlock>
  );
}

export default PostMainPage;
