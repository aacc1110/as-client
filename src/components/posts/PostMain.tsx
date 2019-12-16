import React, { memo } from 'react';
import styled from '@emotion/styled';
import usePosts from './hooks/usePosts';
import PostCard from './PostCard';

const PostMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
  .title {
    font-size: 1rem;
    width: 100%;
    padding: 1rem 0 1rem 0;
  }
  article {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.5rem 0 -0.5rem;
    /* justify-content: space-around; */
    section {
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
      <div className="title">맞춤 포스트</div>
      <article>
        {data.posts.map(post => (
          <section>
            <PostCard key={post.id} post={post} />
          </section>
        ))}
      </article>
    </PostMainBlock>
  );
}

export default memo(PostMain);
