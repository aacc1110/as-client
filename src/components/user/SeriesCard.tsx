import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import palette from '../../styles/palette';
import { formatDate } from '../../lib/utils';
import { postSampleImage } from '../../images/img';
import PostLink from '../posts/PostLink';
import { MdFormatListBulleted } from 'react-icons/md';
import SeriesPostCard from './SeriesPostsCard';

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
      :hover {
        opacity: 0.8;
      }
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
  input {
    display: none;
  }
  input + label {
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .wrap > div {
    position: absolute;
    top: 70px;
    right: 0;
    /* transform: translate(-50%, -50%); */
    width: 30%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* background: ${palette.gray5}; */
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
    z-index: 30;
  }
  .wrap > label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.8; */
    z-index: 20;
  }
  .wrap > div > label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, 0);
    padding: 20px;
    background: black;
    border-radius: 50%;
    z-index: 5;
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
  const wrapRef = useRef<HTMLDivElement>(null);

  if (!series || !useremail) return null;

  const seePopup = () => {
    const checkBox = document.getElementById(
      `${series.id}`
    ) as HTMLInputElement;
    const posts = wrapRef.current;
    if (checkBox.checked === false) {
      posts!.style.display = 'block';
    } else {
      posts!.style.display = 'none';
    }
  };

  return (
    <SeriesCardBlock>
      <div className="img_wrap">
        <PostLink
          useremail={useremail}
          urlPath={series.urlPath}
          seriesId={series.id}
          seriesPosts={series.seriesPosts}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
        <div className="img_series">
          <input type="checkbox" id={series.id} />
          <label htmlFor={series.id} onClick={seePopup}>
            {series.postsCount}
            <br />
            <MdFormatListBulleted />
          </label>
        </div>
      </div>
      <div className="wrap" ref={wrapRef}>
        <label htmlFor={series.id} onClick={seePopup} />
        <div>
          {series.seriesPosts.map(seriesPosts => (
            <section key={seriesPosts.id}>
              <SeriesPostCard
                post={seriesPosts.post}
                seriesPosts={series.seriesPosts}
                useremail={useremail}
              />
            </section>
          ))}
          <label htmlFor={series.id} onClick={seePopup} />
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
