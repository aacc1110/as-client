import React from 'react';
import styled from '@emotion/styled';
import PostView from '../../components/posts/PostView';
import { useParams } from 'react-router';

const PostViewPageBlock = styled.div``;

interface PostViewPageProps {}

function PostViewPage(props: PostViewPageProps) {
  const { useremail, urlPath } = useParams();
  console.log('useremail/urlPath', useremail, urlPath);
  return (
    <PostViewPageBlock>
      <PostView useremail={useremail} urlPath={urlPath} />
    </PostViewPageBlock>
  );
}

export default PostViewPage;
