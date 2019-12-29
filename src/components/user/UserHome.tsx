import React, { memo } from 'react';
import styled from '@emotion/styled';
import { userHomeImage, loginUserThumbnail } from '../../images/img';
import useUserInfo from './hooks/useUserInfo';
import { useParams } from 'react-router';
import {
  MdNotificationsActive,
  MdNotificationsNone,
  MdNotificationsOff
} from 'react-icons/md';
import palette from '../../styles/palette';
import UserHomeMenu from './UserHomeMenu';
import UserHomePost from './UserHomePost';

const UserHomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  .title-img-wrapper {
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
  margin-top: 1rem;
  border: 1px solid black;

  .userInfo-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;

    .userInfo {
      display: inline-flex;
      img {
        height: 5rem;
        width: 5rem;
        box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
        border-radius: 2.5rem;
        object-fit: cover;
        transition: 0.125s all ease-in;
      }
      .userTitle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1.5rem;
        h2 {
          margin: 0;
        }
        span {
          font-size: 0.875rem;
          color: ${palette.gray6};
        }
      }
    }
    .subScription {
      button {
        font-size: 1rem;
      }
    }
  }
`;

interface UserHomeProps {}

function UserHome(props: UserHomeProps) {
  const { useremail } = useParams();
  const { user, loading } = useUserInfo(useremail);

  if (!user || loading) return null;

  return (
    <UserHomeBlock>
      <div className="title-img-wrapper">
        <img src={userHomeImage} alt="userHomeImage" />
      </div>
      <UserHomeInfo>
        <div className="userInfo-wrapper">
          <div className="userInfo">
            <img src={loginUserThumbnail} alt="thumbnail" />
            <div className="userTitle">
              <div>
                <h2>{user.name}</h2>
              </div>
              <span>구독자 8.98만명</span>
            </div>
          </div>
          <div>
            <b>{user.userProfile.about}</b>
          </div>
          <div className="subScription">
            <button>구독</button>
            <MdNotificationsActive />
            <MdNotificationsNone />
            <MdNotificationsOff />
          </div>
        </div>
      </UserHomeInfo>
      <UserHomeMenu />
      <UserHomePost />

      {/* <div>{스트</.posts.map(post => post.id)}</div> */}
    </UserHomeBlock>
  );
}

export default memo(UserHome);
