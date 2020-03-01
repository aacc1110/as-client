import React, { memo } from 'react';
import styled from '@emotion/styled';
import { userHomeImage, loginUserThumbnail } from '../../images/img';
import {
  MdNotificationsActive,
  MdNotificationsNone,
  MdNotificationsOff
} from 'react-icons/md';
import palette from '../../styles/palette';

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

  .userInfo-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;

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
        h3 {
          margin: 0;
        }
        span {
          font-size: 0.875rem;
          color: ${palette.gray6};
        }
      }
    }
    b {
      font-size: 0.875rem;
      color: ${palette.gray8};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .subScription {
      button {
        font-size: 1rem;
      }
    }
  }
`;

interface UserHomeProps {
  username?: string;
  about: string;
}

function UserHome({ username, about }: UserHomeProps) {
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
                <h3>{username}</h3>
              </div>
              <span>구독자 8.98만명</span>
            </div>
          </div>
          <div>
            <b>{about}</b>
          </div>
          <div className="subScription">
            <button>구독</button>
            <MdNotificationsActive />
            <MdNotificationsNone />
            <MdNotificationsOff />
          </div>
        </div>
      </UserHomeInfo>
    </UserHomeBlock>
  );
}

export default memo(UserHome);
