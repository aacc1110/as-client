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
        /* input[type='radio'] {
          display: none;
        } */
        input[type='radio'] + label {
          cursor: pointer;
          :hover {
            color: red;
          }
        }
        input[type='radio']:checked + label {
          font-size: 2rem;
          font-weight: 600;
          color: red;
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
        .conbox {
          display: none;
          width: 500px;
          height: 300px;
          background-color: black;
          margin: 0;
        }
      }
    }
  }
`;

function SeriesCard({ series, useremail }: SeriesCardProps) {
  if (!series || !useremail) return null;
  // const url = `/@${useremail}/series/${series.urlPath}`;
  const seeSeries = () => {
    const hiddenSeriesBox = document.getElementsByClassName(
      `${series.urlPath}`
    )[0] as HTMLElement;
    if (
      document.querySelector(
        `input[id="${series.id}"]:checked`
      ) as HTMLInputElement
    ) {
      hiddenSeriesBox.style.display = 'block';
    }
    // const checked = checkedId.getAttribute('checked');
    // console.log('checked:', checkedId);
    // checkedId.checked = true;
    // if (checked) {
    //   hiddenSeriesBox.style.display = 'block';
    // }
  };
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
          <div className="tabContent">
            <input type="radio" name="series" id={series.id} />
            <label htmlFor={series.id}>
              {series.postsCount}
              <br />
              <MdFormatListBulleted />
            </label>
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
            <br />
            <div
              className={`conbox ${series.urlPath}`}
              style={{ display: 'none' }}
            >
              시리즈목록보기
            </div>
          </div>
        </div>
      </div>
    </SeriesCardBlock>
  );
}

export default SeriesCard;
