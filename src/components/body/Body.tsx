import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BodyProps {
  children: ReactNode;
}

const BodyBlock = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;
`;

function Body({ children }: BodyProps) {
  return <BodyBlock>{children}</BodyBlock>;
}

export default Body;
