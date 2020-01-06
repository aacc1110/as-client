import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdSort } from 'react-icons/md';
import { useQuery } from '@apollo/client';

import { Comment } from '../../lib/graphql/post';
import { loginUserThumbnail } from '../../images/img';
import palette from '../../styles/palette';
import useComment, { REFETCH_COMMENTS } from './hooks/useComment';
import PostCommentCard from './PostCommentCard';
import useUser from '../../lib/hooks/useUser';

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
    align-items: center;
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
  .commentHeader > .writeComment {
    flex: 1;
    font-size: 0.875rem;
    color: ${palette.gray7};
  }
  .commentWriteBox {
    display: inline-block;
    width: 100%;
    color: #000;
    text-decoration: none;
    textarea {
      position: relative;
      outline: none;
      box-shadow: none;
      width: 100%;
      height: 1.3rem;
      border: none;
      resize: none;
      overflow-y: hidden;
      background: transparent;
      margin-bottom: 0.2rem;
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
  userEmail?: string;
  urlPath?: string;
}

function PostComments({
  postId,
  comments,
  userEmail,
  urlPath
}: PostCommentsProps) {
  const commentInputRef = useRef<HTMLTextAreaElement | null>(null);
  const { user } = useUser();
  const { write } = useComment();
  const [value, setComment] = useState('');
  const onChange = () => {
    setComment(commentInputRef.current!.value);
  };
  const refetchComments = useQuery(REFETCH_COMMENTS, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      userEmail,
      urlPath
    }
  });

  if (!comments) return <div>댓글이 없습니다.</div>;

  const onFocus = () => {
    let commentBox = document.getElementsByClassName(
      'commentWriteBox'
    )[0] as HTMLElement;
    let commentFooter = document.getElementsByClassName(
      'commentFooter'
    )[0] as HTMLElement;
    commentBox!.style.borderBottom = `2px solid #000`;
    commentFooter!.style.display = 'flex';
  };

  const onBlur = () => {
    let commentBox = document.getElementsByClassName(
      'commentWriteBox'
    )[0] as HTMLElement;
    commentBox!.style.borderBottom = `1px solid ${palette.gray5}`;
  };

  const onCancel = () => {
    let commentFooter = document.getElementsByClassName(
      'commentFooter'
    )[0] as HTMLElement;
    commentFooter!.style.display = 'none';
    if (!commentInputRef.current) return;
    commentInputRef.current.value = '';
  };

  const onWrite = async () => {
    if (!commentInputRef.current) return;
    const comment = commentInputRef.current.value;
    await write({ postId, comment, level: 0 });
    setComment('');
    onCancel();
    await refetchComments.refetch();
  };

  return (
    <PostCommentsBlock>
      <div className="title">
        <h4>
          댓글
          {comments.length} 개
        </h4>
        <span>
          <MdSort /> 정렬기준
        </span>
      </div>
      {user ? (
        <div className="commentHeader">
          <div>
            <img src={loginUserThumbnail} alt="thumbnail" />
          </div>
          <div className="writeComment">
            <div className="commentWriteBox">
              <textarea
                ref={commentInputRef}
                placeholder="공개 댓글 쓰기"
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              {/* <input
                ref={commentInputRef}
                type="textarea"
                placeholder="공개 댓글 쓰기"
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              /> */}
            </div>
            <div className="commentFooter">
              <div className="cancle" onClick={onCancel}>
                취소
              </div>
              <div className="submit">
                <button onClick={onWrite}>작성</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>로그인후 댓글을 작성 할 수 있습니다.</div>
      )}
      {comments.map(comment => (
        <PostCommentCard key={comment.id} comment={comment} />
      ))}
    </PostCommentsBlock>
  );
}

export default PostComments;
