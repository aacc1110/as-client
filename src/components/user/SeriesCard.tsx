import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import palette from '../../styles/palette';
import { formatDate } from '../../lib/utils';
import { postSampleImage } from '../../images/img';
import PostLink from '../posts/PostLink';
import { MdFormatListBulleted } from 'react-icons/md';

interface SeriesCardProps {
  series?: Series;
  useremail?: string;
}

const SeriesCardBlock = styled.div<{ seriesId: string }>`
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
      .tabContent {
        input[id*='${props => props.seriesId}'] {
          display: none;
        }
        input[id*='${props => props.seriesId}'] + label {
          display: inline-block;
          cursor: pointer;
          :hover {
            color: red;
          }
        }
        input[id*='${props => props.seriesId}'] + label + div {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
        }
        input[id*='${props => props.seriesId}'] + label + div > div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: #fff;
          z-index: 99;
        }
        input[id*='${props => props.seriesId}'] + label + div > div > label {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-40%, -40%);
          padding: 20px;
          background: black;
          border-radius: 100%;
          z-index: 1;
        }
        input[id*='${props => props.seriesId}'] + label + div > label {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          opacity: 0.5;
          z-index: 1;
        }
        input[id*='${props => props.seriesId}'] + label + div {
         display: none;
        }
        input[id*='${props => props.seriesId}']:checked + label + div {
         display: block;
        }
      }
      
    }
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
`;

function SeriesCard({ series, useremail }: SeriesCardProps) {
  if (!series || !useremail) return null;

  return (
    <SeriesCardBlock seriesId={series.id}>
      <div className="img_wrap">
        <PostLink
          seriesId={series.id}
          useremail={useremail}
          urlPath={series.urlPath}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
        <div className="img_series">
          <div className="tabContent">
            <input type="checkbox" name="series" id={series.id} />
            <label htmlFor={series.id}>
              {series.postsCount}
              <br />
              <MdFormatListBulleted />
            </label>
            <div>
              <div>
                <label htmlFor={series.id}></label>
              </div>
              <label htmlFor={series.id}></label>
            </div>
          </div>
        </div>
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
