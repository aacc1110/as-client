import React from 'react';
import styled from '@emotion/styled';
import PostSideCard from './PostSideCard';
import media from '../../lib/media';
import useUserInfo from '../user/hooks/useUserInfo';

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

interface PostSideListProps {
  userEmail?: string;
}

function PostSideList({ userEmail }: PostSideListProps) {
  // const { posts } = usePosts();
  const { user } = useUserInfo(userEmail);

  // if (!posts) return <div>포스트가 존재하지 않습니다.</div>;
  if (!user) return <div>포스트가 존재하지 않습니다.</div>;
  return (
    <PostSideListBlock>
      {user.posts.map(post => (
        <section key={post.id}>
          <PostSideCard post={post} />
        </section>
      ))}
    </PostSideListBlock>
  );
}

export default PostSideList;
