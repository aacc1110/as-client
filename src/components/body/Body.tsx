import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BodyProps {
  children: ReactNode;
}

const BodyBlock = styled.div`
  padding: 16px;
`;

function Body({ children }: BodyProps) {
  return <BodyBlock>{children}</BodyBlock>;
}

export default Body;
