import React from 'react';
import styled from '@emotion/styled';

const ExpansionMenuBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

interface ExpansionMenuProps {}

function ExpansionMenu(props: ExpansionMenuProps) {
  return <ExpansionMenuBlock>expansionMenu</ExpansionMenuBlock>;
}

export default ExpansionMenu;
