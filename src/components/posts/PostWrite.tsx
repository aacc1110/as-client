import React from 'react';
import styled from '@emotion/styled';

const PostWriteBlock = styled.div`
  display: block;
  padding: 1.25rem;
  border: 1px solid black;
`;

interface PostWriteProps {}

function PostWrite(props: PostWriteProps) {
  return (
    <PostWriteBlock>
      <div className="img-wrapper">sdfsd</div>
    </PostWriteBlock>
  );
}

export default PostWrite;
