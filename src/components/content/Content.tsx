import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import SideMenu from './SideMenu';
import useMenu from '../../lib/hooks/useMenu';
import ExpansionMenu from './ExpansionMenu';
import palette from '../../styles/palette';

const ContentBlock = styled.div`
  main {
    display: flex;
    justify-content: center;
    padding-top: 4rem;
    padding-left: 4.5rem;
    background-color: ${palette.gray1};
  }
`;

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  const { core } = useMenu();
  // useEffect(() => {
  //   console.log('core:', core);
  //   core.valueOf();
  // }, [core]);
  return (
    <ContentBlock>
      {core.visible ? <ExpansionMenu /> : <SideMenu />}
      <main>{children}</main>
    </ContentBlock>
  );
}

export default Content;
