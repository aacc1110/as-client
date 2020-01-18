import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';
import { Link } from 'react-router-dom';
import { userThumbnail, postSampleImage } from '../../images/img';
import palette from '../../styles/palette';
import { formatDate } from '../../lib/utils';
import PostLink from './PostLink';

const PostCardBlock = styled.article`
  /* padding: -0.5rem 0 -0.5rem 0;
  flex: 1; */
  /* background: #fff;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  padding-bottom: 1rem;

  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: auto;
  }
  /* .img {
    padding-bottom: 60%;
    background-size: cover;
    background-position: center center;
  } */
  .info {
    display: flex;
    margin: 0.75rem 0 0.75rem 0;
    .userthumbnail {
      img {
        display: block;
        height: 2.2rem;
        width: 2.2rem;
        box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
        border-radius: 1.1rem;
        object-fit: cover;
        transition: 0.125s all ease-in;
        cursor: pointer;
        &:hover {
          img {
            box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
            opacity: 0.7;
          }
        }
        margin-right: 0.7rem;
      }
    }
    .postInfo {
      strong {
        font-size: 0.875rem;
        color: ${palette.gray7};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5;
      }
      .user {
        margin-top: 1rem;
        b {
          font-size: 0.875rem;
          color: ${palette.gray7};
        }
        span {
          font-size: 0.75rem;
          color: ${palette.gray6};
        }
      }
    }
  }
`;

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <PostCardBlock>
      <div className="img">
        <PostLink
          postId={post.id}
          userEmail={post.user.email}
          urlPath={post.urlPath}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
      </div>
      {/* <em>마감</em> */}
      <div className="info">
        <div className="userthumbnail">
          <Link to={`@${post.user.email}`}>
            <img src={userThumbnail} alt="userthumbnail" />
          </Link>
        </div>
        <div className="postInfo">
          <PostLink
            postId={post.id}
            userEmail={post.user.email}
            urlPath={post.urlPath}
          >
            <strong>{post.title}</strong>
          </PostLink>
          <div className="user">
            <div>
              <Link to={`@${post.user.email}`}>
                <b>{post.user.name}</b>
              </Link>
            </div>
            <div>
              <span>조회수 {post.viewsCount}회</span>
              <span> • </span>
              <span>{formatDate(post.releasedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </PostCardBlock>
  );
}

export default PostCard;
