import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const PostLinkBlock = styled.div``;

interface PostLinkProps {
  className?: string;
  userEmail: string;
  urlPath: string;
  prefetch?: boolean;
  children?: ReactNode;
}

function PostLink({
  className,
  userEmail,
  urlPath,
  prefetch = true,
  children
}: PostLinkProps) {
  return <PostLinkBlock />;
}

export default PostLink;
