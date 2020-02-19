import React from 'react';
import styled from '@emotion/styled';
import LayOut from '../../components/LayOut';

const PostSeriesPageBlock = styled(LayOut)``;

interface PostSeriesPageProps {}

function PostSeriesPage(props: PostSeriesPageProps) {
  return <PostSeriesPageBlock>SeriesPosts</PostSeriesPageBlock>;
}

export default PostSeriesPage;
