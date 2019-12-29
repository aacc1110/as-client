import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router';
import TagDetailPage from './TagDetailPage';
import TagListPage from './TagListPage';
import LayOut from '../../components/LayOut';

const TagPageBlock = styled(LayOut)``;

interface TagPageProps {}

function TagPage(props: TagPageProps) {
  return (
    <TagPageBlock>
      <Switch>
        <Route path="/tags" exact>
          <TagListPage />
        </Route>
        <Route path="/tags/:tag" exact>
          <TagDetailPage />
        </Route>
      </Switch>
    </TagPageBlock>
  );
}

export default TagPage;
