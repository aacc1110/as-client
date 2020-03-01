import React from 'react';
import styled from '@emotion/styled';
import PostComments from './PostComments';
import { Comment } from '../../lib/graphql/comment';

const PostSubCommentBlock = styled.div``;

interface PostSubCommentProps {
  commentId?: string;
  postId?: string;
  comments?: Comment[];
  useremail?: string;
  urlPath?: string;
}

function PostSubComment({
  commentId,
  postId,
  comments,
  useremail,
  urlPath
}: PostSubCommentProps) {
  console.log('PostSubComment-postId', postId);
  console.log('PostSubComment-useremail', useremail);
  return (
    <PostSubCommentBlock>
      <PostComments
        comments={comments}
        commentId={commentId}
        postId={postId}
        useremail={useremail}
        urlPath={urlPath}
        sub={true}
      />
    </PostSubCommentBlock>
  );
}

export default PostSubComment;
