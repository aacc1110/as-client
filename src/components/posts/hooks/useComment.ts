import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

export const WRITE_COMMENT = gql`
  mutation WriteComment($postId: ID!, $text: String!) {
    writeComment(postId: $postId, text: $text)
  }
`;

export const REFETCH_COMMENTS = gql`
  query RefetchComments($id: ID, $userEmail: String, $urlPath: String) {
    post(id: $id, userEmail: $userEmail, urlPath: $urlPath) {
      id
      title
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
    }
  }
`;

export default function useComment() {
  const [writeComment] = useMutation(WRITE_COMMENT);
  const write = useCallback(
    (params: { postId: string | undefined; text: string }) => {
      return writeComment({
        variables: {
          postId: params.postId,
          text: params.text
        }
      });
    },
    [writeComment]
  );
  return {
    write
  };
}
