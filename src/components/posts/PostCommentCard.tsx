import React from 'react';
import styled from '@emotion/styled';
import { loginUserThumbnail } from '../../images/img';
import { Comment } from '../../lib/graphql/post';
import useUser from '../../lib/hooks/useUser';
import { formatDate } from '../../lib/utils';

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
`;

interface PostCommentCardProps {
  comment?: Comment;
  postId?: string;
}

function PostCommentCard({ postId, comment }: PostCommentCardProps) {
  const { user } = useUser();
  if (!comment) return null;
  return (
    <PostCommentCardBlock>
      <div className="commentContents">
        <div>
          <img src={loginUserThumbnail} alt="thumbnail" />
        </div>
        <div className="content">
          <form>
            <div>
              <span>{comment.user.name}</span>
              <span>{formatDate(comment.createdAt)}</span>
            </div>
            <div>{comment.comment}</div>
            {user && user.id === comment.user.id ? (
              <div>
                <div>취소</div>
                <div>
                  <input type="submit" value="수정" />
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </PostCommentCardBlock>
  );
}

export default PostCommentCard;
