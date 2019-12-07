import React, { memo } from 'react';
import styled from '@emotion/styled';
import { userHomeImage, loginUserThumbnail } from '../../images/img';
import useUserInfo from './hooks/useUserInfo';
import { useParams } from 'react-router';

const UserHomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  .img-wapper {
    img {
      width: 100%;
      height: 10rem;
    }
  }
`;
const UserHomeInfo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  margin-top: 1rem;
  .userInfo {
    width: 900px;
    border: 1px solid black;
    img {
      display: block;
      height: 4rem;
      width: 4rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
      border-radius: 2rem;
      object-fit: cover;
      transition: 0.125s all ease-in;
      cursor: pointer;
      &:hover {
        img {
          box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
          opacity: 0.7;
        }
      }
    }
  }
`;

interface UserHomeProps {}

function UserHome(props: UserHomeProps) {
  const { useremail } = useParams();

  console.log('useremail', useremail);
  const { user, loading } = useUserInfo(useremail);
  console.log('userInfo', user);
  if (!user || loading) return null;

  return (
    <UserHomeBlock>
      <div className="img-wapper">
        <img src={userHomeImage} alt="userHomeImage" />
      </div>
      <UserHomeInfo>
        <div className="userInfo">
          <img src={loginUserThumbnail} alt="thumbnail" />
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.userProfile.about}</div>
          <div>{user.posts.map(post => post.id)}</div>
        </div>
      </UserHomeInfo>
    </UserHomeBlock>
  );
}

export default memo(UserHome);
