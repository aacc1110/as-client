import React, { memo, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import usePosts from './hooks/usePosts';
import PostCard from './PostCard';
import media from '../../lib/media';
import useScrollPagenation from './hooks/useScrollPagenation';
import { safe } from '../../lib/utils';

const PostMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
  .title-wrapper {
    font-size: 1rem;
    width: 100%;
    padding: 1rem 0 1rem 0;
  }
  article {
    display: flex;
    flex-wrap: wrap;
    /* margin: 0 -0.5rem 0 -0.5rem; */
    justify-content: space-between;
    section {
      ${media.xxlarge} {
        width: calc(100% / 4);
      }
      ${media.medium} {
        width: calc(100% / 3);
      }
      ${media.small} {
        width: calc(100% / 2);
      }
      margin: 0 -0.5rem 1.5rem -0.5rem;
      /* margin-left: 0.5rem; */
    }
  }
`;

interface PostMainProps {}

function PostMain(props: PostMainProps) {
  const { posts, onLoadMore } = usePosts();

  const cursor: string | null = safe(() => posts![posts!.length - 1].id);

  console.log(cursor);

  useScrollPagenation({
    cursor,
    onLoadMore
  });

  if (!posts) return <div>포스트가 존재하지 않습니다.</div>;
  console.log(posts);

  return (
    <PostMainBlock>
      <div className="title-wrapper">맞춤 포스트</div>
      <article>
        {posts.map(post => (
          <section key={post.id}>
            <PostCard post={post} />
          </section>
        ))}
      </article>
    </PostMainBlock>
  );
}

export default memo(PostMain);
