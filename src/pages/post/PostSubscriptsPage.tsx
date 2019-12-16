import React from 'react';
import styled from '@emotion/styled';
import PostSubscripts from '../../components/posts/PostSubscripts';

const PostSubscriptsPageBlock = styled.div``;

interface PostSubscriptsPageProps {}

function PostSubscriptsPage(props: PostSubscriptsPageProps) {
  return (
    <PostSubscriptsPageBlock>
      <PostSubscripts />
    </PostSubscriptsPageBlock>
  );
}

export default PostSubscriptsPage;
