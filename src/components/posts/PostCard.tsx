import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';

const PostCardBlock = styled.div`
  width: 15rem;
  height: 20rem;
  border: 1px solid black;
`;

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return <PostCardBlock>{post.id}</PostCardBlock>;
}

export default PostCard;
