import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './header/Header';
import Content from './content/Content';

const LayOutBlock = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
`;

interface LayOutProps {
  children: ReactNode;
}

function LayOut({ children }: LayOutProps) {
  return (
    <LayOutBlock>
      <Header />
      <Content>{children}</Content>
    </LayOutBlock>
  );
}

export default LayOut;
