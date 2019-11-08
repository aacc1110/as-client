import React from 'react';
import styled from '@emotion/styled';
import Tags from '../../components/tag/Tags';

const TagPageBlock = styled.div``;

interface TagPageProps {}

function TagPage(props: TagPageProps) {
  return (
    <TagPageBlock>
      <Tags />
    </TagPageBlock>
  );
}

export default TagPage;
