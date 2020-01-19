import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { loginUserThumbnail, userThumbnail } from '../../images/img';
import useUser from '../../lib/hooks/useUser';
import { formatDate } from '../../lib/utils';
import { MdMoreVert, MdSubdirectoryArrowRight } from 'react-icons/md';
import palette from '../../styles/palette';
import useBoolean from '../../lib/hooks/useBoolean';
import { Comment } from '../../lib/graphql/comment';
import PostSubComment from './PostSubComment';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { REMOVE_COMMENT, REFETCH_COMMENTS } from './hooks/useComment';
import PostCommentWrite from './PostCommentWrite';

const PostCommentCardBlock = styled.div`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: ${palette.gray8};

  .commentContents {
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
  .content {
    position: relative;
    height: auto;
    flex: 1;
  }
  .contentHead {
    display: flex;
    justify-content: space-between;
  }
  .editButton {
    svg {
      font-size: 1.125rem;
      color: ${palette.gray6};
      cursor: pointer;
      :hover {
        color: ${palette.gray9};
      }
    }
  }
  .buttonWarp {
    width: 3.5rem;
    display: flex;
    justify-content: space-between;
  }
`;
const SubComment = styled.div`
  width: 100%;
  /* border: 1px solid black; */
`;

export const DisplayText = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
  word-break: normal;
  word-wrap: break-word;
`;
const Span = styled.span`
  font-size: 0.75rem;
  color: ${palette.gray7};
  cursor: pointer;
  :hover {
    color: ${palette.gray6};
    text-decoration: underline;
  }
`;

interface PostCommentCardProps {
  comment?: Comment | undefined;
  commentId?: string;
  postId?: string;
  userEmail?: string;
  urlPath?: string;
  sub?: boolean;
  edit?: boolean;
}

function PostCommentCard({
  comment,
  commentId,
  userEmail,
  urlPath,
  postId,
  sub,
  edit
}: PostCommentCardProps) {
  const { user } = useUser();
  const [value, show] = useBoolean(false);
  const [removeComment] = useMutation(REMOVE_COMMENT);
  const refetchComments = useQuery(REFETCH_COMMENTS, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      userEmail,
      urlPath
    }
  });
  const onEditBox = (mode: string) => {
    const hiddenEditBox = document.getElementsByClassName(
      `hiddenEditBox${comment!.id}`
    )[0] as HTMLElement;

    if (mode === ('leave' || 'close')) {
      hiddenEditBox.style.display = 'none';
      return;
    }
    if (hiddenEditBox.style.display === 'none') {
      hiddenEditBox!.style.display = 'contents';
      return;
    }
    hiddenEditBox.style.display = 'none';
    return;
  };

  const commentEditAndRemove = useCallback(
    async (id: string, mode: string) => {
      if (mode === 'REMOVE') {
        let del = window.confirm(
          '댓글을 삭제하시면 복구할 수 없습니다. 삭제하시겠습니까?'
        );
        if (del) {
          await removeComment({
            variables: {
              id,
              postId
            }
          });
          refetchComments.refetch();
        } else {
          console.log('cancle');
          return;
        }
      } else if (mode === 'EDIT') {
        const text = document.getElementsByClassName(
          `text${comment!.id}`
        )[0] as HTMLDivElement;
        const textedit = document.getElementsByClassName(
          `textedit${comment!.id}`
        )[0] as HTMLDivElement;
        text!.style.display = 'none';
        textedit!.style.display = 'block';
        const subComment = document.getElementsByClassName(
          `subComment${comment!.id}`
        )[0] as HTMLDivElement;
        if (subComment) {
          subComment.style.display = 'none';
        }
      }
    },
    [comment, postId, refetchComments, removeComment]
  );

  if (!comment) return null;

  const { createdAt, text, repliesCount, replies } = comment;

  return (
    <PostCommentCardBlock>
      <div className="commentContents">
        {sub && <MdSubdirectoryArrowRight />}
        <div>
          {comment.user ? (
            <Link to={`/@${comment.user.email}`}>
              <img src={loginUserThumbnail} alt="thumbnail" />
            </Link>
          ) : (
            <img src={userThumbnail} alt="thumbnail" />
          )}
        </div>
        <div className="content">
          <div className="contentHead">
            <div>
              <span>
                <b>{comment.user.name}</b>
              </span>
              <span> {formatDate(createdAt)}</span>
            </div>
            <div
              className={`hiddenEditBox${comment.id}`}
              style={{ display: 'none' }}
              onMouseEnter={() => onEditBox('enter')}
              onMouseLeave={() => onEditBox('close')}
            >
              {user && user.id === comment.user.id ? (
                <div className="buttonWarp">
                  <Span
                    onClick={() => commentEditAndRemove(comment.id, 'EDIT')}
                  >
                    수정
                  </Span>
                  <Span
                    onClick={() => commentEditAndRemove(comment.id, 'REMOVE')}
                  >
                    삭제
                  </Span>
                </div>
              ) : (
                <Span>신고</Span>
              )}
            </div>
          </div>
          <div className={`text${comment.id}`}>
            <DisplayText>{text || '삭제된 댓글입니다.'}</DisplayText>
          </div>
          <div
            className={`textedit${comment.id}`}
            style={{ display: 'none', width: '100%' }}
          >
            <PostCommentWrite
              postId={postId}
              commentId={comment.id}
              userEmail={userEmail}
              urlPath={urlPath}
              value={text}
              edit={true}
              sub={sub}
            />
          </div>
          {!commentId && (
            <div className={`subComment${comment.id}`}>
              {repliesCount > 0 ? (
                <Span onClick={show}>댓글 {repliesCount}</Span>
              ) : (
                <Span onClick={show}>댓글쓰기</Span>
              )}
            </div>
          )}

          {value && (
            <SubComment>
              <PostSubComment
                comments={replies}
                postId={postId}
                commentId={comment.id}
                userEmail={userEmail}
                urlPath={urlPath}
              />
            </SubComment>
          )}
        </div>
        <div className="editButton">
          <MdMoreVert
            onClick={() => onEditBox('show')}
            onMouseLeave={() => onEditBox('leave')}
          />
        </div>
      </div>
    </PostCommentCardBlock>
  );
}

export default PostCommentCard;
