import React from 'react';
import styled from 'styled-components';
import useScrollPagenation from '../../lib/useScrollPagenation';
import media from '../../lib/media';
import PostCard from './PostCard';
import useTrendPosts from './hooks/useTrendPosts';

const PostTrendsBlock = styled.div`
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

interface PostTrendsProps {}

function PostTrends(props: PostTrendsProps) {
  const { trendPosts, offset, onLoadMoreByOffset } = useTrendPosts();

  useScrollPagenation({
    offset,
    onLoadMoreByOffset
  });

  if (!trendPosts) return <div>포스트가 존재하지 않습니다.</div>;
  console.log(trendPosts);

  return (
    <PostTrendsBlock>
      <div className="title-wrapper">인기 포스트</div>
      <PostList>
        {trendPosts.map(post => (
          <section key={post.id}>
            <PostCard post={post} />
          </section>
        ))}
      </PostList>
    </PostTrendsBlock>
  );
}

export default PostTrends;
