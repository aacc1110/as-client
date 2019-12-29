import React from 'react';
import styled from '@emotion/styled';

const TagDetailBlock = styled.div``;

interface TagDetailProps {
  tag?: string;
}

function TagDetail({ tag }: TagDetailProps) {
  return <TagDetailBlock>{tag}</TagDetailBlock>;
}

export default TagDetail;
