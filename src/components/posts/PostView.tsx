import React from 'react';
import styled from '@emotion/styled';
import { postSampleImage } from '../../images/img';

const PostViewBlock = styled.div`
  img {
    display: block;
    padding: 1.25rem;
    border: 1px solid black;
  }
`;

interface PostViewProps {}

function PostView(props: PostViewProps) {
  return (
    <PostViewBlock>
      <img src={postSampleImage} alt="thumbnail" />
    </PostViewBlock>
  );
}

export default PostView;
