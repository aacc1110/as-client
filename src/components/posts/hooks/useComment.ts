import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

export const WRITE_COMMENT = gql`
  mutation WriteComment($postId: ID!, $text: String!, $level: Int) {
    writeComment(postId: $postId, text: $text, level: $level)
  }
`;

export const REFETCH_COMMENTS = gql`
  query RefetchComments($id: ID, $userEmail: String, $urlPath: String) {
    post(id: $id, userEmail: $userEmail, urlPath: $urlPath) {
      id
      comments {
        id
        text
        level
        createdAt
        deleted
        level
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
  }
`;

export default function useComment() {
  const [writeComment] = useMutation(WRITE_COMMENT);
  const write = useCallback(
    (params: { postId: string | undefined; text: string; level: number }) => {
      return writeComment({
        variables: {
          postId: params.postId,
          text: params.text,
          level: params.level
        }
      });
    },
    [writeComment]
  );
  return {
    write
  };
}
