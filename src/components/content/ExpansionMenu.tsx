import React from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';
import {
  MdTrendingUp,
  MdFiberNew,
  MdSubscriptions,
  MdStar
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ExpansionMenuBlock = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 3rem;
  width: 10rem;
  height: 100%;
  background-color: ${palette.gray0};
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
  padding: 0;
  margin: 0;
`;

const ExpansionMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${palette.gray8};
  width: 100%;
  padding: 0.625rem 0 0.625rem 0;
  font-size: 0.75rem;
  text-decoration: none;
  transition: 0.125s all ease-in;
  :hover {
    background: ${palette.gray3};
  }
  svg {
    font-size: 1.375rem;
    padding-left: 1rem;
    padding-right: 0.625rem;
    :hover {
      color: ${palette.blue5};
      opacity: 0.7;
    }
  }
  &.active {
    color: ${palette.blue6};
    background-color: ${palette.gray3};
    font-weight: bold;
  }
`;

const HorizontalBar = styled.hr`
  border-top: 1px solid ${palette.gray5};
  width: 80%;
`;

interface ExpansionMenuProps {}

function ExpansionMenu(props: ExpansionMenuProps) {
  return (
    <ExpansionMenuBlock>
      <ExpansionMenuItem
        to="/trends"
        activeClassName="active"
        isActive={(match, location) => {
          if (!match) return false;
          return ['/', '/trends'].indexOf(location.pathname) !== -1;
        }}
      >
        <MdTrendingUp />
        인기
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/recents" activeClassName="active">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <HorizontalBar />
      <ExpansionMenuItem to="/subscripts" activeClassName="active">
        <MdSubscriptions />
        구독
      </ExpansionMenuItem>
      <HorizontalBar />
      <ExpansionMenuItem to="/tags" activeClassName="active">
        <MdStar />
        테그
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
      <ExpansionMenuItem to="/tags">
        <MdFiberNew />
        최신
      </ExpansionMenuItem>
    </ExpansionMenuBlock>
  );
}

export default ExpansionMenu;
