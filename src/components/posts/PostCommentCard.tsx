import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { loginUserThumbnail } from '../../images/img';
import { Comment } from '../../lib/graphql/post';
import useUser from '../../lib/hooks/useUser';
import { formatDate } from '../../lib/utils';
import { MdMoreVert } from 'react-icons/md';
import palette from '../../styles/palette';
import useBoolean from '../../lib/hooks/useBoolean';

const PostCommentCardBlock = styled.div`
  margin-top: 2rem;

  .commentContents {
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
  .content {
    flex: 1;
  }
  .editBox {
    svg {
      font-size: 1.125rem;
      color: ${palette.gray6};
      cursor: pointer;
      :hover {
        color: ${palette.gray9};
      }
    }
  }
  .hiddenEditBox {
    display: inherit;
    width: 100px;
    height: auto;
    justify-content: space-around;
    top: 2rem;
    border: 1px solid black;
    position: relative;
    right: 6rem;
  }
`;

interface PostCommentCardProps {
  comment?: Comment;
  postId?: string;
}

function PostCommentCard({ postId, comment }: PostCommentCardProps) {
  const { user } = useUser();
  const { value, show } = useBoolean(false);

  if (!comment) return null;
  return (
    <PostCommentCardBlock>
      <div className="commentContents">
        <div>
          <img src={loginUserThumbnail} alt="thumbnail" />
        </div>
        <div className="content">
          <div>
            <span>{comment.user.name}</span>
            <span>{formatDate(comment.createdAt)}</span>
          </div>
          <div>{comment.comment}</div>
          <div>답글 22</div>
        </div>
        <div className="editBox">
          <MdMoreVert onClick={show} />
        </div>
        {value && (
          <div className="hiddenEditBox">
            <div>수정</div>
            <div>삭제</div>
          </div>
        )}
      </div>
    </PostCommentCardBlock>
  );
}

export default PostCommentCard;
