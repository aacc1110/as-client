import React from 'react';
import styled from '@emotion/styled';

import LayOut from '../../components/LayOut';
import PostWrite from '../../components/post/PostWrite';

const PostWritePageBlock = styled(LayOut)``;

interface PostWritePageProps {}

function PostWritePage(props: PostWritePageProps) {
  return (
    <PostWritePageBlock>
      <PostWrite />
    </PostWritePageBlock>
  );
}

export default PostWritePage;
