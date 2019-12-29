import React from 'react';
import styled from '@emotion/styled';
import TagDetail from '../../components/tag/TagDetail';
import { useParams } from 'react-router';

const TagDetailPageBlock = styled.div``;

interface TagDetailPageProps {}

function TagDetailPage(props: TagDetailPageProps) {
  const { tag } = useParams();
  console.log(tag);
  return (
    <TagDetailPageBlock>
      <TagDetail tag={tag} />
    </TagDetailPageBlock>
  );
}

export default TagDetailPage;
