import { useQuery, gql } from '@apollo/client';
import { Post } from '../../../lib/graphql/post';
import { safe } from '../../../lib/utils';

export const GET_POST = gql`
  query Post($id: ID) {
    post(id: $id) {
      id
      title
      body
      isPublish
      meta
      viewsCount
      shortSummary
      urlPath
      releasedAt
      createdAt
      images {
        id
        imageUrl
      }
      tags {
        id
        tag
      }
      comments {
        id
        comment
        level
      }
      user {
        id
        email
        name
        userProfile {
          id
          thumbnail
          imageUrl
        }
      }
    }
  }
`;

export default function usePost(id: string | null) {
  const getPost = useQuery<{ post: Post }>(GET_POST, {
    variables: { id },
    fetchPolicy: 'cache-first'
  });

  const { data } = getPost;
  const post = safe(() => data!.post);
  return {
    post
  };
}
