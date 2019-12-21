import React from 'react';
import styled from '@emotion/styled';
import PostView from '../../components/posts/PostView';

const PostViewPageBlock = styled.div``;

interface PostViewPageProps {}

function PostViewPage(props: PostViewPageProps) {
  // const { useremail } = useParams();
  return (
    <PostViewPageBlock>
      <PostView />
    </PostViewPageBlock>
  );
}

export default PostViewPage;
