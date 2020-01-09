import { useQuery, gql } from '@apollo/client';
import { Post } from '../../../lib/graphql/post';
import { safe } from '../../../lib/utils';

export const GET_POST = gql`
  query Post($id: ID, $userEmail: String, $urlPath: String) {
    post(id: $id, userEmail: $userEmail, urlPath: $urlPath) {
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
      commentsCount
      comments {
        id
        text
        level
        like
        hate
        hasReplies
        deleted
        createdAt
        user {
          id
          name
          email
          userProfile {
            id
            thumbnail
            imageUrl
          }
        }
        repliesCount
        replies {
          id
          text
          level
          deleted
          createdAt
          user {
            id
            name
            email
            userProfile {
              id
              thumbnail
              imageUrl
            }
          }
        }
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

export default function usePost(
  userEmail: string | undefined,
  urlPath: string | undefined
) {
  const getPost = useQuery<{ post: Post }>(GET_POST, {
    variables: {
      userEmail,
      urlPath
    },
    fetchPolicy: 'cache-first'
  });

  const { data } = getPost;
  const post = safe(() => data!.post);
  return {
    post
  };
}
