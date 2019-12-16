import React, { memo } from 'react';
import styled from '@emotion/styled';
import usePosts from './hooks/usePosts';
import PostItem from './PostCard';

const PostRecentsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

interface PostRecentsProps {}

function PostRecents(props: PostRecentsProps) {
  const { data, loading } = usePosts();
  if (!data || loading) return null;
  console.log(data.posts);
  return (
    <PostRecentsBlock>
      {data.posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostRecentsBlock>
  );
}

export default memo(PostRecents);
