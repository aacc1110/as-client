import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

export const WRITE_COMMENT = gql`
  mutation WriteComment($postId: ID!, $comment: String!, $level: Int) {
    writeComment(postId: $postId, comment: $comment, level: $level)
  }
`;

export default function useComment() {
  const [writeComment] = useMutation(WRITE_COMMENT);
  const write = useCallback(
    (params: {
      postId: string | undefined;
      comment: string;
      level: number;
    }) => {
      return writeComment({
        variables: {
          postId: params.postId,
          comment: params.comment,
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
