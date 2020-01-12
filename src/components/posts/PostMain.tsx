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
  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-right: 1rem;
      ${media.xxlarge} {
        flex: 0 1 20%;
        padding: 0 0 34px;
      }
      ${media.large} {
        flex: 0 1 25%;
        padding: 0 0 30px;
      }
    }
  }
`;

interface PostMainProps {}

function PostMain(props: PostMainProps) {
  const { posts, cursor, onLoadMore } = usePosts();

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
      <PostList>
        <ul>
          {posts.map(post => (
            <li>
              <PostCard key={post.id} post={post} />
            </li>
          ))}
        </ul>
      </PostList>
    </PostMainBlock>
  );
}

export default memo(PostMain);
