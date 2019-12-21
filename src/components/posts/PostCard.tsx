import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';
import { Link } from 'react-router-dom';
import { userThumbnail, postSampleImage } from '../../images/img';
import palette from '../../styles/palette';

const PostCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  .postImages {
    height: 11.25rem;
    overflow: hidden;
    img {
      display: block;
      width: auto;
      height: 100%;
      /* object-fit: cover; */
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
        margin: 0 0 0.5rem 0;
      }
      span {
        font-size: 0.75rem;
        color: ${palette.gray7};
        line-height: 1.5;
        & + & {
          content: •;
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
      <div className="postImages">
        <img src={postSampleImage} alt="thumbnail" />
      </div>
      <div className="userInfo">
        <Link to={`@${post.user.email}`}>
          <img src={userThumbnail} alt="thumbnail" />
        </Link>
        <div className="postInfo">
          <div>
            <Link to={`/@${post.user.email}/${post.urlPath}`}>
              <h5>{post.title}</h5>
            </Link>
          </div>
          <span>
            <Link to={`@${post.user.email}`}>{post.user.name}</Link>
          </span>
          <div>
            <span>조회수 1.5만</span>
            <span> • </span>
            <span>1일전</span>
          </div>
        </div>
      </div>
    </PostCardBlock>
  );
}

export default PostCard;
