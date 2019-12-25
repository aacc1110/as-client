import { useQuery, gql } from '@apollo/client';
import { Post } from '../../../lib/graphql/post';

export const GET_POST = gql`
  query Post($userEmail: String, $urlPath: String) {
    post(userEmail: $userEmail, urlPath: $urlPath) {
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

export default function usePost(userEmail: string, urlPath: string) {
  const getPost = useQuery<{ post: Post }>(GET_POST, {
    variables: { userEmail, urlPath },
    fetchPolicy: 'cache-first'
  });

  const { data } = getPost;
  const post = data!.post;
  return {
    post
  };
}
