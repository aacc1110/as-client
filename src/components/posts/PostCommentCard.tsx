import React from 'react';
import styled from '@emotion/styled';
import { loginUserThumbnail } from '../../images/img';
import useUser from '../../lib/hooks/useUser';
import { formatDate } from '../../lib/utils';
import { MdMoreVert, MdSubdirectoryArrowRight } from 'react-icons/md';
import palette from '../../styles/palette';
import useBoolean from '../../lib/hooks/useBoolean';
import { Comment } from '../../lib/graphql/comment';

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
  width: 90%;
  border: 1px solid black;
`;

const DisplayText = styled.div`
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
  index?: number;
  comment?: Comment | undefined;
  postId?: string;
}

function PostCommentCard({ postId, comment, index }: PostCommentCardProps) {
  const { user } = useUser();
  const { value, show } = useBoolean(false);
  console.log(index);

  const onEditBox = (mode: string) => {
    const hiddenEditBox = document.getElementsByClassName(
      `hiddenEditBox${index}`
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

  if (!comment) return null;

  const { createdAt, text } = comment;
  console.log(text);

  return (
    <PostCommentCardBlock>
      <div className="commentContents">
        <div>
          <img src={loginUserThumbnail} alt="thumbnail" />
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
              className={`hiddenEditBox${index}`}
              style={{ display: 'none' }}
              onMouseEnter={() => onEditBox('enter')}
              onMouseLeave={() => onEditBox('close')}
            >
              {user && user.id === comment.user.id ? (
                <div className="buttonWarp">
                  <Span>수정</Span>
                  <Span>삭제</Span>
                </div>
              ) : (
                <Span>신고</Span>
              )}
            </div>
          </div>
          <DisplayText>{text || '삭제된 댓글입니다.'}</DisplayText>
          <div className="subComment">
            <Span onClick={show}>답글 22</Span>
          </div>

          {value && (
            <SubComment>
              <MdSubdirectoryArrowRight />
              subComment
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
