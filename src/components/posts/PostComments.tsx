import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdSort } from 'react-icons/md';
import { useQuery } from '@apollo/client';

import { loginUserThumbnail } from '../../images/img';
import palette from '../../styles/palette';
import useComment, { REFETCH_COMMENTS } from './hooks/useComment';
import PostCommentCard from './PostCommentCard';
import useUser from '../../lib/hooks/useUser';
import { Comment } from '../../lib/graphql/comment';

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
      /* position: relative; */
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
      /* margin-bottom: 0.2rem; */
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
}

function PostComments({
  postId,
  comments,
  commentsCount,
  userEmail,
  urlPath
}: PostCommentsProps) {
  const commentTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { user } = useUser();
  const { write } = useComment();
  const [text, setComment] = useState('');
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
    console.log('keydown');
    // var el = document.body;
    const el = document.querySelector('textarea');
    setTimeout(() => {
      if (!el) return null;
      el.style.cssText = 'height: 1rem; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  };

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
    if (!commentTextAreaRef.current) return;
    commentTextAreaRef.current.value = '';
    autosize();
  };

  const onWrite = async () => {
    if (!commentTextAreaRef.current) return;
    await write({ postId, text });
    setComment('');
    onCancel();
    autosize();
    await refetchComments.refetch();
  };

  if (!comments) return <div>댓글이 없습니다.</div>;

  return (
    <PostCommentsBlock>
      <div className="title">
        <h4>댓글 {commentsCount}개</h4>
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
                ref={commentTextAreaRef}
                placeholder="공개 댓글 쓰기"
                value={text}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={autosize}
              />
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
      {comments.map((comment, index) => (
        <PostCommentCard key={comment.id} comment={comment} index={index} />
      ))}
    </PostCommentsBlock>
  );
}

export default PostComments;
