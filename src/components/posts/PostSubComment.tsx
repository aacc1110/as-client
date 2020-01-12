import React from 'react';
import styled from '@emotion/styled';
import PostComments from './PostComments';
import { Comment } from '../../lib/graphql/comment';

const PostSubCommentBlock = styled.div``;

interface PostSubCommentProps {
  commentId?: string;
  postId?: string;
  comments?: Comment[];
  userEmail?: string;
  urlPath?: string;
}

function PostSubComment({
  commentId,
  postId,
  comments,
  userEmail,
  urlPath
}: PostSubCommentProps) {
  console.log('PostSubComment-postId', postId);
  return (
    <PostSubCommentBlock>
      <PostComments
        comments={comments}
        commentId={commentId}
        postId={postId}
        sub={true}
        userEmail={userEmail}
        urlPath={urlPath}
      />
    </PostSubCommentBlock>
  );
}

export default PostSubComment;
