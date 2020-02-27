import React from 'react';
import styled from '@emotion/styled';
import PostSideCard from './PostSideCard';
import media from '../../lib/media';
import useTrendPosts from './hooks/useTrendPosts';

const PostSideListBlock = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  ${media.xlarge} {
    width: 380px;
  }
  ${media.large} {
    width: 330px;
  }
  ${media.medium} {
    width: 300px;
  }
  ${media.small} {
    display: none;
  }
  ${media.xsmall} {
    display: none;
  }
`;

interface PostSideListProps {}

function PostSideList(props: PostSideListProps) {
  // const { posts } = usePosts();
  const { trendPosts } = useTrendPosts();

  // if (!posts) return <div>포스트가 존재하지 않습니다.</div>;
  if (!trendPosts) return <div>포스트가 존재하지 않습니다.</div>;
  return (
    <PostSideListBlock>
      {trendPosts.map(post => (
        <section key={post.id}>
          <PostSideCard post={post} />
        </section>
      ))}
    </PostSideListBlock>
  );
}

export default PostSideList;
