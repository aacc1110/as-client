import React from 'react';
import styled from '@emotion/styled';

const UserAboutTabBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .about_wrapper {
    display: inline-flex;
    align-items: center;
    width: 1000px;
  }
`;

interface UserAboutTabProps {
  about?: string;
}

function UserAboutTab({ about }: UserAboutTabProps) {
  return (
    <UserAboutTabBlock>
      <div className="about_wrapper">{JSON.stringify(about)}</div>
    </UserAboutTabBlock>
  );
}

export default UserAboutTab;
