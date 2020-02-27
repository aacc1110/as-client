import React, { memo } from 'react';
import styled from '@emotion/styled';
import useScrollPagenation from '../../lib/useScrollPagenation';
import PostCard from './PostCard';
import media from '../../lib/media';
import usePosts from './hooks/usePosts';

const PostRecentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
  .title-wrapper {
    font-size: 1rem;
    width: 100%;
    padding: 1rem 0 1rem 0;
  }
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  margin: 0;
  padding: 0;

  ${media.xlarge} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${media.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.small} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.xsmall} {
    grid-template-columns: 1fr;
  }
`;

interface PostRecentsProps {}

function PostRecents(props: PostRecentsProps) {
  const { posts, cursor, onLoadMore } = usePosts();

  useScrollPagenation({
    cursor,
    onLoadMore
  });

  if (!posts) return <div>최신포스트가 존재하지 않습니다.</div>;
  console.log(posts);

  return (
    <PostRecentsBlock>
      <div className="title-wrapper">최신 포스트</div>
      <PostList>
        {posts.map(post => (
          <section key={post.id}>
            <PostCard post={post} />
          </section>
        ))}
      </PostList>
    </PostRecentsBlock>
  );
}

export default memo(PostRecents);
