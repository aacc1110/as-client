import React from 'react';
import styled from 'styled-components';

import Header from './header/Header';
import Menu from './menu/Menu';
import Body from './body/Body';
import palette from '../styles/palette';

interface LayOutProps {}

const LayOutBlock = styled.div`
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    height: 120px;
    background-color: ${palette.gray1};
  }
  .view {
    display: flex;
    flex-direction: row;
    .menu {
      width: 120px;
    }
  }
`;

function LayOut(props: LayOutProps) {
  return (
    <LayOutBlock>
      <div className="header">
        <Header />
      </div>
      <div className="view">
        <div className="menu">
          <Menu />
        </div>
        <Body />
      </div>
    </LayOutBlock>
  );
}

export default LayOut;
