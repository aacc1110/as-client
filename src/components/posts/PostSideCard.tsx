import React from 'react';
import styled from '@emotion/styled';
import { postSampleImage } from '../../images/img';
import { Post } from '../../lib/graphql/post';
import palette from '../../styles/palette';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import PostLink from './PostLink';

const PostSideCardBlock = styled.article`
  width: 100%;
  display: flex;
  padding-bottom: 1rem;
  font-size: 0.8125rem;
  color: ${palette.gray7};
  img {
    width: 160px;
    height: auto;
    :hover {
      opacity: 0.8;
    }
  }
  .sideInfo {
    width: 100%;
    padding: 0 0.5rem 0 0.5rem;
    .sideTitle {
      color: ${palette.gray8};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5;
      padding-bottom: 0.25rem;
    }
    span {
      font-size: 0.6875rem;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

interface PostSideCardProps {
  post: Post;
}

function PostSideCard({ post }: PostSideCardProps) {
  return (
    <PostSideCardBlock>
      <div>
        <PostLink
          postId={post.id}
          useremail={post.user.email}
          urlPath={post.urlPath}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
      </div>
      <div className="sideInfo">
        <div className="sideTitle">{post.title}</div>
        <div>
          <b>{post.user.name}</b>
        </div>
        <div className="bottom">
          <span>조회수 {post.viewsCount}</span>
          <span>
            {post.likes} {post.liked ? <MdFavorite /> : <MdFavoriteBorder />}
          </span>
        </div>
      </div>
    </PostSideCardBlock>
  );
}

export default PostSideCard;
