import React from 'react';
import styled from 'styled-components';

import Header from './header/Header';
import Menu from './menu/Menu';
import Body from './body/Body';
import palette from '../styles/palette';

const LayOutBlock = styled.div`
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: ${palette.gray1};
  }

  .menu {
    position: fixed;
    top: 60px;
    width: 120px;
  }
  .body {
    padding-top: 60px;
    padding-left: 125px;
  }
`;

interface LayOutProps {}

function LayOut(props: LayOutProps) {
  return (
    <LayOutBlock>
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="menu">
          <Menu />
        </div>
        <div className="body">
          <Body />
        </div>
      </div>
    </LayOutBlock>
  );
}

export default LayOut;
