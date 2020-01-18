import React, { memo } from 'react';
import styled from '@emotion/styled';
import usePosts from './hooks/usePosts';
import PostCard from './PostCard';
import media from '../../lib/media';
import useScrollPagenation from '../../lib/useScrollPagenation';

const PostMainBlock = styled.div`
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

interface PostMainProps {}

function PostMain(props: PostMainProps) {
  const { posts, cursor, onLoadMore } = usePosts();

  console.log('cursor', cursor);

  useScrollPagenation({
    cursor,
    onLoadMore
  });

  if (!posts) return <div>포스트가 존재하지 않습니다.</div>;
  console.log(posts);

  return (
    <PostMainBlock>
      <div className="title-wrapper">맞춤 포스트</div>
      <PostList>
        {posts.map(post => (
          <section key={post.id}>
            <PostCard post={post} />
          </section>
        ))}
      </PostList>
    </PostMainBlock>
  );
}

export default memo(PostMain);
