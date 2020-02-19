import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import SeriesCard from './SeriesCard';
import media from '../../lib/media';

const UserSeriesTabBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  .series_wrapper {
    display: inline-flex;
    align-items: center;
    width: 1000px;
  }
`;

const SeriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  margin: 0;
  padding: 0;

  ${media.xlarge} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${media.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.small} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.xsmall} {
    grid-template-columns: 1fr;
  }
`;

interface UserSeriesTabProps {
  seriesList?: Series[];
  useremail?: string;
}

function UserSeriesTab({ seriesList, useremail }: UserSeriesTabProps) {
  if (!seriesList) return null;
  return (
    <UserSeriesTabBlock>
      <div className="series_wrapper">
        {seriesList.length === 0 ? (
          <div>시리즈가 존재하지않습니다.</div>
        ) : (
          <SeriesList>
            {seriesList.map(series => (
              <SeriesCard
                key={series.id}
                series={series}
                useremail={useremail}
              />
            ))}
          </SeriesList>
        )}
      </div>
    </UserSeriesTabBlock>
  );
}

export default UserSeriesTab;
