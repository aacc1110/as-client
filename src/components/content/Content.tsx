import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import SideMenu from './SideMenu';
import ExpansionMenu from './ExpansionMenu';
import palette from '../../styles/palette';
import useUser from '../../lib/hooks/useUser';

const ContentBlock = styled.div`
  main {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    padding-left: 3.5rem;
    background-color: ${palette.gray1};
  }
`;

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  const { visible } = useUser();

  return (
    <ContentBlock>
      {visible ? <ExpansionMenu /> : <SideMenu />}
      <main>{children}</main>
    </ContentBlock>
  );
}

export default Content;
