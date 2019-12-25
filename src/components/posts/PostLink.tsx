import React, { ReactNode, useCallback } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import client from '../../client';
import { GET_POST } from './hooks/usePost';

const PostLinkBlock = styled(Link)``;

interface PostLinkProps {
  postId?: string;
  className?: string;
  userEmail: string;
  urlPath: string;
  prefetch?: boolean;
  children?: ReactNode;
}

function PostLink({
  postId,
  className,
  userEmail,
  urlPath,
  prefetch = true,
  children
}: PostLinkProps) {
  const to = `/@${userEmail}/${urlPath}`;
  const onPrefetch = useCallback(() => {
    if (!prefetch) return;
    client.query({
      query: GET_POST,
      variables: {
        id: postId
      }
    });
  }, [postId, prefetch]);

  const onMouseEnter = () => {
    setTimeout(onPrefetch, 2000);
  };

  const onMouseLeave = () => {
    clearTimeout();
  };
  return (
    <PostLinkBlock
      to={to}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </PostLinkBlock>
  );
}

export default PostLink;
