import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';
import { Link } from 'react-router-dom';
import { userThumbnail, postSampleImage } from '../../images/img';
import palette from '../../styles/palette';
import { formatDate } from '../../lib/utils';
import PostLink from './PostLink';

const PostCardBlock = styled.div`
padding: -0.5rem 0 -0.5rem 0;
a {
  text-decoration: none;
}
article {
    display: block;
    position: relative;
    width: 300px;
    height: auto;
    line-height: 1;
   
    em {
      position: absolute;
      right: 9px;
      top: 9px;
      z-index: 2;
      width: 60px;
      height: 60px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      text-align: center;
      line-height: 60px;
      border-radius: 100%;
    }
    .img {
      overflow: hidden;
      position: relative;
      width: 300px;
      height: 200px;
      border-bottom: 1px solid ${palette.gray3};
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: auto;
        transform: translate(-50%, -50%);
      }
    }
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
        p {
          margin: 0;
          padding: 0;
          padding-top: 0.7rem;          
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
  }
  /* display: flex;
  flex-direction: column;
  margin: 0.5rem;
  .postImages {
    height: auto;
    overflow: hidden;
    img {
      display: block;
      width: auto;
      height: 100%;

      object-fit: cover;
    }
    border: 1px solid black;
  }
  .userInfo {
    display: inline-flex;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
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
      margin-right: 0.5rem;
    }
    .postInfo {
      display: flex;
      flex-direction: column;
      a {
        color: inherit;
        text-decoration: none;
      }

      h5 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0 0 0.5rem 0;
      }
      span {
        font-size: 0.8125rem;
        color: ${palette.gray7};
        line-height: 1.5;
        & + & {
          content: •;
        }
      }
    }
  } */
`;

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <PostCardBlock>
      <article>
        <div className="img">
          <PostLink
            postId={post.id}
            userEmail={post.user.email}
            urlPath={post.urlPath}
          >
            <img src={postSampleImage} alt="thumbnail" />
          </PostLink>
        </div>
        <em>마감</em>
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

            <p>
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
            </p>
          </div>
        </div>
      </article>
    </PostCardBlock>
  );
}

export default PostCard;
