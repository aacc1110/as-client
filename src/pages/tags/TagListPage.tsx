import React from 'react';
import styled from '@emotion/styled';
import TagList from '../../components/tag/TagList';

const TagListPageBlock = styled.div``;

interface TagListPageProps {}

function TagListPage(props: TagListPageProps) {
  return (
    <TagListPageBlock>
      <TagList />
    </TagListPageBlock>
  );
}

export default TagListPage;
