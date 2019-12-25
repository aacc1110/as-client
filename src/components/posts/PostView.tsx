import React from 'react';
import styled from '@emotion/styled';
import { postSampleImage } from '../../images/img';
import usePost from './hooks/usePost';

const PostViewBlock = styled.div`
  img {
    display: block;
    padding: 1.25rem;
    border: 1px solid black;
  }
`;

interface PostViewProps {
  userEmail?: string;
  postId?: string | null;
}

function PostView({ postId, userEmail }: PostViewProps) {
  console.log('userEmail', postId);
  // const { post } = usePost(postId);
  // if (!post) return null;
  return (
    <PostViewBlock>
      <img src={postSampleImage} alt="thumbnail" />
      {/* {post.id} */}
    </PostViewBlock>
  );
}

export default PostView;
