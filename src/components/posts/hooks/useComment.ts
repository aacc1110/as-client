import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

export const WRITE_COMMENT = gql`
  mutation WriteComment($id: ID, $postId: ID!, $text: String!) {
    writeComment(id: $id, postId: $postId, text: $text)
  }
`;

export const EDIT_COMMENT = gql`
  mutation EditComment($id: ID!, $text: String!) {
    editComment(id: $id, text: $text)
  }
`;

export const REMOVE_COMMENT = gql`
  mutation RemoveComment($id: ID!, $postId: ID) {
    removeComment(id: $id, postId: $postId)
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
    (params: {
      id: string | undefined;
      postId: string | undefined;
      text: string | undefined;
    }) => {
      return writeComment({
        variables: {
          id: params.id,
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
