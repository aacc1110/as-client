import React from 'react';
import styled from 'styled-components';

interface BodyProps {}

const BodyBlock = styled.div`
  display: flex;
  margin: 0 auto;
`;

function Body(props: BodyProps) {
  return (
    <BodyBlock>
      <div>sdfsdfdsa</div>
    </BodyBlock>
  );
}

export default Body;
