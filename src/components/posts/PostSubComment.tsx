import React from 'react';
import styled from '@emotion/styled';
import PostComments from './PostComments';
import { Comment } from '../../lib/graphql/comment';

const PostSubCommentBlock = styled.div``;

interface PostSubCommentProps {
  comments?: Comment[];
}

function PostSubComment({ comments }: PostSubCommentProps) {
  return (
    <PostSubCommentBlock>
      <PostComments comments={comments} sub={true} />
    </PostSubCommentBlock>
  );
}

export default PostSubComment;
