import React from 'react';
import styled from '@emotion/styled';
import Main from '../../components/main/Main';

const MainPageBlock = styled.div``;

interface MainPageProps {}

function MainPage(props: MainPageProps) {
  return (
    <MainPageBlock>
      <Main />
    </MainPageBlock>
  );
}

export default MainPage;
