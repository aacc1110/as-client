import React from 'react';
import styled from '@emotion/styled';
import { MdSort } from 'react-icons/md';

import palette from '../../styles/palette';
import PostCommentCard from './PostCommentCard';
import useUser from '../../lib/hooks/useUser';
import { Comment } from '../../lib/graphql/comment';
import PostCommentWrite from './PostCommentWrite';

const PostCommentsBlock = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  .title {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    h4 {
      font-weight: 400;
      margin-right: 2rem;
    }
    span {
      cursor: pointer;
    }
  }
  .commentHeader {
    display: flex;
    align-items: flex-start;
    img {
      display: block;
      height: 3rem;
      width: 3rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
      border-radius: 1.5rem;
      object-fit: cover;
      transition: 0.125s all ease-in;
      margin-right: 1rem;
    }
  }
  .writeComment {
    flex: 1;
    font-size: 0.875rem;
    color: ${palette.gray7};
  }
  #commentWrap {
    display: inline-block;
    width: 100%;
    color: #000;
    text-decoration: none;
    textarea {
      font-size: 0.875rem;
      outline: none;
      box-shadow: none;
      height: 1rem;
      width: 100%;
      border: none;
      resize: none;
      overflow-y: hidden;
      background: transparent;
      line-height: 1.5;
    }
    border-bottom: 1px solid ${palette.gray5};
  }
  .commentWriteBox::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
  }
  .commentWriteBox:hover::after {
    width: 100%;
  }
  .commentFooter {
    display: none;
    align-items: center;
    justify-content: flex-end;
  }
  .cancle {
    cursor: pointer;
  }
`;

interface PostCommentsProps {
  postId?: string;
  comments?: Comment[];
  commentsCount?: number;
  userEmail?: string;
  urlPath?: string;
  commentId?: string;
  sub?: boolean;
}

function PostComments({
  postId,
  comments,
  commentsCount,
  userEmail,
  urlPath,
  commentId,
  sub
}: PostCommentsProps) {
  const { user } = useUser();

  if (!comments) return <div>댓글이 없습니다.</div>;

  console.log('postcomments', sub);

  return (
    <PostCommentsBlock>
      {!sub && (
        <div className="title">
          <h4>댓글 {commentsCount}개</h4>
          <span>
            <MdSort /> 정렬기준
          </span>
        </div>
      )}
      {user ? (
        <PostCommentWrite
          postId={postId}
          userEmail={userEmail}
          urlPath={urlPath}
          commentId={commentId}
        />
      ) : (
        <div>로그인후 댓글을 작성 할 수 있습니다.</div>
      )}
      {comments.map(comment => (
        <PostCommentCard
          key={comment.id}
          comment={comment}
          commentId={commentId}
          postId={postId}
          userEmail={userEmail}
          urlPath={urlPath}
        />
      ))}
    </PostCommentsBlock>
  );
}

export default PostComments;
