import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';

const UserPostTabBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
  .posts-wrapper {
    display: inline-flex;
    align-items: center;
    width: 1000px;
  }
`;

interface UserPostTabProps {
  posts: Post[];
}

function UserPostTab({ posts }: UserPostTabProps) {
  return (
    <UserPostTabBlock>
      <div className="posts-wrapper">{JSON.stringify(posts)}</div>
    </UserPostTabBlock>
  );
}

export default UserPostTab;
