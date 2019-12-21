import React, { memo } from 'react';
import styled from '@emotion/styled';
import usePosts from './hooks/usePosts';
import PostCard from './PostCard';

const PostMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
  .title-wrapper {
    font-size: 1rem;
    width: 100%;
    padding: 1rem 0 1rem 0;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.5rem 0 -0.5rem;
    /* justify-content: space-around; */
    article {
      flex-grow: 1;
      width: 16.25rem;
      margin: 0.5rem;
    }
  }
`;

interface PostMainProps {}

function PostMain(props: PostMainProps) {
  const { data, loading } = usePosts();
  if (!data || loading) return null;
  console.log(data.posts);
  return (
    <PostMainBlock>
      <div className="title-wrapper">맞춤 포스트</div>
      <section>
        {data.posts.map(post => (
          <article key={post.id}>
            <PostCard post={post} />
          </article>
        ))}
      </section>
    </PostMainBlock>
  );
}

export default memo(PostMain);
