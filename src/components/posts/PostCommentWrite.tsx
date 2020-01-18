import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { loginUserThumbnail } from '../../images/img';
import useComment, { REFETCH_COMMENTS } from './hooks/useComment';
import { useQuery } from '@apollo/client';
import palette from '../../styles/palette';

const PostCommentWriteBlock = styled.div`
  width: 100%;
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

interface PostCommentWriteProps {
  postId?: string;
  userEmail?: string;
  urlPath?: string;
  commentId?: string;
  sub?: boolean;
  edit?: string;
  textValue?: string;
}

function PostCommentWrite({
  postId,
  userEmail,
  urlPath,
  commentId,
  sub,
  edit,
  textValue
}: PostCommentWriteProps) {
  const commentTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { write } = useComment();
  const [text, setComment] = useState(textValue);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const refetchComments = useQuery(REFETCH_COMMENTS, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      userEmail,
      urlPath
    }
  });

  const autosize = () => {
    const el = document.getElementById(`${commentId}`);
    setTimeout(() => {
      if (!el) return null;
      el.style.cssText = 'height: 1rem; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  };
  const onFocus = () => {
    let commentBox = document.getElementsByClassName(
      `commentWriteBox${commentId}`
    )[0] as HTMLElement;
    let commentFooter = document.getElementsByClassName(
      `commentFooter${commentId}`
    )[0] as HTMLElement;
    console.log(commentBox.className);
    console.log(commentFooter.className);
    commentBox!.style.borderBottom = `2px solid #000`;
    commentFooter!.style.display = 'flex';
  };

  const onBlur = () => {
    let commentBox = document.getElementsByClassName(
      `commentWriteBox${commentId}`
    )[0] as HTMLElement;
    commentBox!.style.borderBottom = `1px solid ${palette.gray5}`;
  };

  const onCancel = () => {
    let commentFooter = document.getElementsByClassName(
      `commentFooter${commentId}`
    )[0] as HTMLElement;
    commentFooter!.style.display = 'none';
    if (!commentTextAreaRef.current) return;
    commentTextAreaRef.current.value = '';
    autosize();
  };

  const onWrite = async () => {
    if (!commentTextAreaRef.current) return;
    if (commentTextAreaRef.current.value === '') {
      commentTextAreaRef.current.focus();
      commentTextAreaRef.current.placeholder = '댓글을 작성해주세요.';
      return;
    }
    await write({
      id: commentId,
      postId,
      text
    });
    await refetchComments.refetch();
    setComment('');
    onCancel();
    autosize();
  };

  if (sub && commentId !== undefined) {
    let textarea = document.getElementById(
      `${commentId}`
    ) as HTMLTextAreaElement;
    textarea!.placeholder = `댓글 쓰기`;
  }

  console.log('sub:', sub, 'commentId:', commentId);

  return (
    <PostCommentWriteBlock>
      <div className="commentHeader">
        {!edit && (
          <div>
            <img src={loginUserThumbnail} alt="thumbnail" />
          </div>
        )}

        <div className={`writeComment`}>
          <div className={`commentWriteBox${commentId}`} id="commentWrap">
            <textarea
              id={`${commentId}`}
              ref={commentTextAreaRef}
              placeholder="공개 댓글 쓰기"
              value={text}
              minLength={2}
              maxLength={300}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={autosize}
            />
          </div>
          <div
            className={`commentFooter${commentId}`}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <div className="cancle" onClick={onCancel}>
              취소
            </div>
            <div className="submit">
              <button onClick={onWrite}>작성</button>
            </div>
          </div>
        </div>
      </div>
    </PostCommentWriteBlock>
  );
}

export default PostCommentWrite;
