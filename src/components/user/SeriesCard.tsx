import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import palette from '../../styles/palette';
import media from '../../lib/media';
import { Link } from 'react-router-dom';
import { formatDate } from '../../lib/utils';

const SeriesCardBlock = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
  ${media.small} {
    padding: 0;
    width: 100%;
    & + & {
      margin-top: 3rem;
    }
  }

  /* font-family: 'Spoqa Han Sans', -apple-system, BlinkMacSystemFont,
    -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo',
    arial, 나눔고딕, 'Nanum Gothic', 돋움; */

  h4 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    ${media.small} {
      line-height: 1;
    }
    color: ${palette.gray8};
    a {
      text-decoration: none;
    }
  }
  .info {
    ${media.small} {
      line-height: 1;
    }
    font-size: 0.875rem;
    color: ${palette.gray6};
    .count {
      color: ${palette.gray8};
    }
    .dot {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: initial;
`;

interface SeriesCardProps {
  series?: Series;
  useremail?: string;
}

function SeriesCard({ series, useremail }: SeriesCardProps) {
  if (!series) return null;
  const url = `/@${useremail}/series/${series.urlPath}`;
  return (
    <SeriesCardBlock>
      <h4>
        <StyledLink to={url}>{series.name}</StyledLink>
      </h4>
      <div className="info">
        <span className="count">{series.postsCount}개의 포스트</span>
        <span className="dot">·</span>
        마지막 업데이트 {formatDate(series.updatedAt)}
      </div>
    </SeriesCardBlock>
  );
}

export default SeriesCard;
