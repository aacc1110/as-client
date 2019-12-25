import React from 'react';
import styled from '@emotion/styled';
import { postSampleImage } from '../../images/img';
import client from '../../client';
import { gql, useQuery } from '@apollo/client';
import { POST_DET } from './hooks/usePosts';
import { Post } from '../../lib/graphql/post';

const PostViewBlock = styled.div`
  img {
    display: block;
    padding: 1.25rem;
    border: 1px solid black;
  }
`;

interface PostViewProps {}

function PostView(props: PostViewProps) {
  const post = useQuery<{ post: Post }>(POST_DET, {
    // query: gql`
    //   query posts($id: ID) {
    //     posts(id: $id): {
    //       id
    //       title
    //     }
    //   }
    // `,
    variables: {
      id: 'e5b61ca3-74d1-403d-8083-c3f5711503e9'
    },
    fetchPolicy: 'cache-first'
  });
  if (!post) return null;
  console.log(post);
  return (
    <PostViewBlock>
      <img src={postSampleImage} alt="thumbnail" />
    </PostViewBlock>
  );
}

export default PostView;
