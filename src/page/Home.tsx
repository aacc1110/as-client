import React from 'react';
import styled from 'styled-components';

interface HomeProps {}

const HomeBlock = styled.div`
  font-size: 14rem;
`;

function Home(props: HomeProps) {
  console.log('HOME');
  return (
    <HomeBlock>
      <div>HOME</div>
    </HomeBlock>
  );
}

export default Home;
