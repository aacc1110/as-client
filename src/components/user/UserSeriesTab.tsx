import React from 'react';
import styled from '@emotion/styled';
import { Series } from '../../lib/graphql/series';

const UserSeriesTabBlock = styled.div`
  display: flex;
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
}

function UserSeriesTab({ seriesList }: UserSeriesTabProps) {
  return (
    <UserSeriesTabBlock>
      <div className="series_wrapper">
        {seriesList!.length === 0 ? (
          <div>시리즈가 없습니다.</div>
        ) : (
          <div>{seriesList!.map(series => series.id)}</div>
        )}
      </div>
    </UserSeriesTabBlock>
  );
}

export default UserSeriesTab;
