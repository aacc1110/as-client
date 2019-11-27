import React from 'react';
import styled from '@emotion/styled';
import Search from '../../components/search/Search';

const SearchPageBlock = styled.div``;

interface SearchPageProps {}

function SearchPage(props: SearchPageProps) {
  return (
    <SearchPageBlock>
      <Search />
    </SearchPageBlock>
  );
}

export default SearchPage;
