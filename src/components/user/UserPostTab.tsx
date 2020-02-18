import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';
import PostCard from '../posts/PostCard';
import media from '../../lib/media';

const UserPostTabBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .posts_wrapper {
    display: inline-flex;
    align-items: center;
    width: 1000px;
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
interface UserPostTabProps {
  posts: Post[];
}

function UserPostTab({ posts }: UserPostTabProps) {
  return (
    <UserPostTabBlock>
      <div className="posts_wrapper">
        {!posts ? (
          <div>포스트가 존재하지 않습니다.</div>
        ) : (
          <PostList>
            {posts.map(post => (
              <section key={post.id}>
                <PostCard post={post} />
              </section>
            ))}
          </PostList>
        )}
      </div>
    </UserPostTabBlock>
  );
}

export default UserPostTab;
