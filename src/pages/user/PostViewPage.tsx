import React from 'react';
import styled from '@emotion/styled';
import PostView from '../../components/posts/PostView';
import { useParams } from 'react-router';
import LayOut from '../../components/LayOut';

const PostViewPageBlock = styled(LayOut)``;

interface PostViewPageProps {}

function PostViewPage(props: PostViewPageProps) {
  const { useremail, urlPath } = useParams();
  return (
    <PostViewPageBlock>
      <PostView useremail={useremail} urlPath={urlPath} />
    </PostViewPageBlock>
  );
}

export default PostViewPage;
