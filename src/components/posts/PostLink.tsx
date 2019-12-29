import React, { ReactNode, useCallback, useRef } from 'react';
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
  const prefetchTimeId = useRef<number | null>(null);
  const onPrefetch = useCallback(() => {
    if (!prefetch) return;
    client.query({
      query: GET_POST,
      variables: {
        userEmail,
        urlPath
      }
    });
  }, [prefetch, urlPath, userEmail]);

  const onMouseEnter = () => {
    prefetchTimeId.current = setTimeout(onPrefetch, 2500);
  };

  const onMouseLeave = () => {
    if (prefetchTimeId.current) {
      clearTimeout(prefetchTimeId.current);
    }
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
