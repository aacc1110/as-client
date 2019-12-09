import React, { memo } from 'react';
import styled from '@emotion/styled';
import usePosts from './hooks/usePosts';
import PostItem from './PostCard';

const PostsRecetBlock = styled.div`
  display: flex;
  align-items: center;
`;

interface PostsRecetProps {}

function PostsRecet(props: PostsRecetProps) {
  const { data, loading } = usePosts();
  if (!data || loading) return null;
  console.log(data.posts);
  return (
    <PostsRecetBlock>
      {data.posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostsRecetBlock>
  );
}

export default memo(PostsRecet);
