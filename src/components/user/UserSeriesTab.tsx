import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';
import SeriesCard from './SeriesCard';

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
          <div>시리즈가 없습니다.</div>
        ) : (
          <div>
            {seriesList.map(series => (
              <SeriesCard
                key={series.id}
                useremail={useremail}
                series={series}
              />
            ))}
          </div>
        )}
      </div>
    </UserSeriesTabBlock>
  );
}

export default UserSeriesTab;
