import React from 'react';
import styled from '@emotion/styled';
import { postSampleImage, loginUserThumbnail } from '../../images/img';
import usePost from './hooks/usePost';
import { formatDate } from '../../lib/utils';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';
import {
  MdThumbUp,
  MdPlaylistAdd,
  MdThumbDown,
  MdReply,
  MdMoreHoriz
} from 'react-icons/md';

const PostViewBlock = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  border: 1px solid black;
  .main {
    flex: 1;
    flex-basis: 0.000000001px;
    display: block;
    padding: 1.25rem 1.25rem 0 0;
    border: 1px solid black;
  }
  .imgBox {
    position: relative;
    img {
      width: 900px;
      height: 100px;
      /* height: auto; */
      border: 1px solid black;
    }
  }
  .info-contents {
    border-bottom: 1px solid;
    padding: 1rem 0 8px 0;
  }
  .info-contents > .tag {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.2rem;
    a {
      text-decoration: none;
      color: ${palette.blue5};
    }
    span {
      margin-right: 0.5rem;
    }
  }
  .info-contents > .title {
    max-height: 4.8rem;
    overflow: hidden;
    font-weight: 500;
    line-height: 2.4rem;
  }

  .info-contents > .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: ${palette.gray7};
    line-height: 1.2;
  }
  .info-contents > .info > .infoText {
    display: block;
    max-height: 2.1rem;
    overflow: hidden;
  }
  .info-contents > .info > .infoText > .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .info-contents > .info > .infoMenu {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      font-size: 1rem;
      color: ${palette.gray7};
      cursor: pointer;
      &:hover {
        color: ${palette.blue5};
        opacity: 0.7;
      }
    }
    span {
      margin-right: 1.3rem;
      top: 0;
    }
  }
  .userInfo {
    display: block;
    border-bottom: 1px solid;
    padding-top: 16px;
    margin-bottom: 24px;
    padding-bottom: 16px;
  }
  .userInfo > .user {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    img {
      display: block;
      height: 3rem;
      width: 3rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
      border-radius: 1.5rem;
      object-fit: cover;
      transition: 0.125s all ease-in;
      cursor: none;
    }
  }
  .list {
    display: block;
    min-width: 300px;
    border: 1px solid black;
  }
`;

interface PostViewProps {
  userEmail?: string;
  urlPath?: string;
  postId?: string;
}

function PostView({ postId, userEmail, urlPath }: PostViewProps) {
  const { post } = usePost(userEmail, urlPath);
  if (!post) return null;
  return (
    <PostViewBlock>
      <div className="main">
        <div>
          <div className="imgBox">
            <img src={postSampleImage} alt="thumbnail" />
          </div>
          <div className="info-contents">
            <div className="tag">
              {post.tags.map(tag => (
                <span key={tag.id}>
                  <Link to={`/tags/${tag.tag}`}>#{tag.tag}</Link>
                </span>
              ))}
            </div>
            <div className="title">{post.title}</div>
            <div className="info">
              <div className="infoText">
                <span>조회수 {post.viewsCount}회</span>
                <span>•{formatDate(post.releasedAt)}</span>
                <div className="flex"></div>
              </div>
              <div className="infoMenu">
                <MdThumbUp />
                <span>187</span>
                <MdThumbDown />
                <span>12</span>
                <MdPlaylistAdd />
                <span>저장</span>
                <MdReply />
                <span>공유</span>
                <MdMoreHoriz />
              </div>
            </div>
          </div>
        </div>
        <div className="userInfo">
          <div className="user">
            <div className="userThumbnail">
              <img src={loginUserThumbnail} alt="thumbnail" />
            </div>
            <div className="subscript">구독</div>
          </div>
          <div className="user"> content</div>
          <div className="user"> 더보기</div>
        </div>
        댓글
      </div>

      <div className="list">
        <div>사이드 리스트</div>
      </div>
      {/* <img src={postSampleImage} alt="thumbnail" />
      <div className="postInfo">
        <div className="tag">
          {post.tags.map(tag => (
            <span key={tag.id}>
              <Link to="/">#{tag.tag}</Link>
            </span>
          ))}
        </div>
        <div className="title">
          <span>{post.title}</span>
        </div>
        <div className="postSideInfo">
          <span>조회수 {post.viewsCount}회</span>
          <span> • </span>
          <span>{formatDate(post.releasedAt)}</span>
          <div>사이드메뉴</div>
        </div>
        <div>{post.user.name}</div>
      </div> */}
    </PostViewBlock>
  );
}

export default PostView;
