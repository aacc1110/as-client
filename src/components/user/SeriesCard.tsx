import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import palette from '../../styles/palette';
import { formatDate } from '../../lib/utils';
import { postSampleImage } from '../../images/img';
import PostLink from '../posts/PostLink';
import { MdFormatListBulleted } from 'react-icons/md';
import SeriesPostList from './SeriesPostList';

interface SeriesCardProps {
  series?: Series;
  useremail?: string;
}

const SeriesCardBlock = styled.div`
  a {
    text-decoration: none;
  }
  .img_wrap {
    display: block;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
  }
  .img_series {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 33%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    z-index: 1;
  }
  .img_series input {
    /* display: none; */
  }
  .img_series input + label {
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  .wrap {
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.5;
    z-index: 100;
  }
  .wrap > div {
    position: absolute;
    top: 70px;
    right: 0;
    /* transform: translate(-50%, -50%); */
    width: 300px;
    height: 100%;
    background: coral;
    z-index: 3;
  }
  .wrap > label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
  .wrap > div > label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-40%, -40%);
    padding: 20px;
    background: #dd5347;
    border-radius: 100%;
    z-index: 2;
  }
  input:checked + label .wrap {
    /* opacity: 1;
    visibility: visible; */
    display: block;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin: 0.75rem 0 0.75rem 0;
    .seriesInfo {
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
        margin-top: 0.5rem;
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
  &::after {
    clear: both;
  }
`;

function SeriesCard({ series, useremail }: SeriesCardProps) {
  if (!series || !useremail) return null;

  return (
    <SeriesCardBlock>
      <div className="img_wrap">
        <PostLink
          seriesId={series.id}
          useremail={useremail}
          urlPath={series.urlPath}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
        <div className="img_series">
          <input type="checkbox" id="popup" />
          <label htmlFor="popup">
            {series.postsCount}
            <br />
            <MdFormatListBulleted />
          </label>
        </div>
      </div>
      <div className="wrap">
        <div>
          <SeriesPostList />
          <label htmlFor="popup"></label>
        </div>
        <label htmlFor="popup"></label>
      </div>
      <div className="info">
        <div className="seriesInfo">
          {/* <PostLink
            postId={post.id}
            useremail={post.user.email}
            urlPath={post.urlPath}
          > */}

          <strong>{series.name}</strong>
          {/* </PostLink> */}
          <div className="user">
            <span>업데이트: {formatDate(series.updatedAt)}</span>
          </div>
        </div>
      </div>
    </SeriesCardBlock>
  );
}

export default SeriesCard;
