import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';

const UserSeriesTabBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
  .series-wrapper {
    display: inline-flex;
    align-items: center;
    width: 1000px;
  }
`;

interface UserSeriesTabProps {
  series: Post[];
}

function UserSeriesTab({ series }: UserSeriesTabProps) {
  return (
    <UserSeriesTabBlock>
      <div className="series-wrapper">{JSON.stringify(series)}</div>
    </UserSeriesTabBlock>
  );
}

export default UserSeriesTab;
