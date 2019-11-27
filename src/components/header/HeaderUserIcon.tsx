import React from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';
import { CurrentUser } from '../../lib/graphql/user';
import { userThumbnail } from '../../images/img';
import { MdArrowDropDown } from 'react-icons/md';

const HeaderUserIconBlock = styled.div`
  cursor: pointer;
  padding-right: 1.5rem;
  img {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
    border-radius: 1.25rem;
    object-fit: cover;
    transition: 0.125s all ease-in;
  }
  svg {
    font-size: 1.5rem;
    margin-left: 0.25rem;
    color: ${palette.gray6};
    transition: 0.125s all ease-in;
  }
  display: flex;
  align-items: center;
  &:hover {
    img {
      box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
      color: ${palette.blue5};
      opacity: 0.7;
    }
    svg {
      color: ${palette.gray9};
    }
  }
`;

interface HeaderUserIconProps {
  user: CurrentUser | undefined;
}

function HeaderUserIcon({ user }: HeaderUserIconProps) {
  return (
    <HeaderUserIconBlock>
      {user ? (
        <img src={user.userProfile.thumbnail} alt={user.name} />
      ) : (
        <img src={userThumbnail} alt="thumbnail" />
      )}
      <MdArrowDropDown />
    </HeaderUserIconBlock>
  );
}

export default HeaderUserIcon;
