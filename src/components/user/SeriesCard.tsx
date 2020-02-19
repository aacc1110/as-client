import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import palette from '../../styles/palette';
import { formatDate } from '../../lib/utils';
import { postSampleImage } from '../../images/img';
import PostLink from '../posts/PostLink';
import { MdFormatListBulleted } from 'react-icons/md';

const SeriesCardBlock = styled.div`
  padding-bottom: 1rem;

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
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
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
interface SeriesCardProps {
  series?: Series;
  useremail?: string;
}

function SeriesCard({ series, useremail }: SeriesCardProps) {
  if (!series || !useremail) return null;
  // const url = `/@${useremail}/series/${series.urlPath}`;
  return (
    <SeriesCardBlock>
      <div className="img_wrap">
        <PostLink
          seriesId={series.id}
          useremail={useremail}
          urlPath={series.urlPath}
        >
          <img src={postSampleImage} alt="thumbnail" />
          <div className="img_series">
            {series.postsCount}
            <MdFormatListBulleted />
          </div>
        </PostLink>
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
            <br />
            <span>시리즈목록보기</span>
          </div>
        </div>
      </div>
    </SeriesCardBlock>
  );
}

export default SeriesCard;
