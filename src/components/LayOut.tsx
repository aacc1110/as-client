import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './header/Header';
import Menu from './menu/Menu';
import Body from './body/Body';
import palette from '../styles/palette';

const LayOutBlock = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    background-color: ${palette.gray1};
  }

  .menu {
    position: fixed;
    top: 3rem;
    width: 3.5rem;
    height: 100%;
    background-color: ${palette.gray1};
  }
  .body {
    padding-top: 3rem;
    padding-left: 3.5rem;
    background-color: ${palette.gray3};
  }
`;

interface LayOutProps {
  children: ReactNode;
}

function LayOut({ children }: LayOutProps) {
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
          <Body>{children}</Body>
        </div>
      </div>
    </LayOutBlock>
  );
}

export default LayOut;
