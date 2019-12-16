import React from 'react';
import styled from '@emotion/styled';

const UserHomePostBlock = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid black;
  .userPost-wrapper {
    display: inline-flex;
    width: 900px;
  }
`;

interface UserHomePostProps {}

function UserHomePost(props: UserHomePostProps) {
  return (
    <UserHomePostBlock>
      <div className="userPost-wrapper">UserHomePost</div>
    </UserHomePostBlock>
  );
}

export default UserHomePost;
