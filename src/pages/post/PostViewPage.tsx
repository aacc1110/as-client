import React from 'react';
import styled from '@emotion/styled';
import PostView from '../../components/posts/PostView';
import { useParams } from 'react-router';

const PostViewPageBlock = styled.div``;

interface PostViewPageProps {}

function PostViewPage(props: PostViewPageProps) {
  const { useremail, urlpath } = useParams();
  console.log('urlsdfsdfsdf', useremail, urlpath);
  return (
    <PostViewPageBlock>
      <PostView userEmail={useremail} urlPath={urlpath} />
    </PostViewPageBlock>
  );
}

export default PostViewPage;
