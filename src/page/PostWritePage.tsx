import React from 'react';
import styled from '@emotion/styled';

import PostWrite from '../components/post/PostWrite';

const PostWritePageBlock = styled.div``;

interface PostWritePageProps {}

function PostWritePage(props: PostWritePageProps) {
  return (
    <PostWritePageBlock>
      <PostWrite />
    </PostWritePageBlock>
  );
}

export default PostWritePage;
