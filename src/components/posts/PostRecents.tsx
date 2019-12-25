import React, { memo } from 'react';
import styled from '@emotion/styled';

const PostRecentsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

interface PostRecentsProps {}

function PostRecents(props: PostRecentsProps) {
  return <PostRecentsBlock>PostRecents</PostRecentsBlock>;
}

export default memo(PostRecents);
