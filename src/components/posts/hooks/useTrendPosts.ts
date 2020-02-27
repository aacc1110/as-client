import { gql, useQuery } from '@apollo/client';
import { Post } from '../../../lib/graphql/post';
import { useCallback } from 'react';
import { safe } from '../../../lib/utils';

export const GET_TREND_POSTS = gql`
  query TrendPosts($limit: Int, $offset: Int, $timeframe: String) {
    trendPosts(limit: $limit, offset: $offset, timeframe: $timeframe) {
      id
      title
      viewsCount
      urlPath
      releasedAt
      images {
        id
        imageUrl
      }
      user {
        id
        email
        name
        userProfile {
          id
          thumbnail
        }
      }
    }
  }
`;

export default function useTrendPosts() {
  const getTrendPosts = useQuery<{ trendPosts: Post[] }>(GET_TREND_POSTS, {
    pollInterval: 1000 * 60 * 5
  });

  const onLoadMoreByOffset = useCallback(
    (offset: number) => {
      getTrendPosts.fetchMore({
        variables: {
          offset
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            trendPosts: [...prev.trendPosts, ...fetchMoreResult.trendPosts]
          };
        }
      });
    },
    [getTrendPosts]
  );

  const { data, refetch } = getTrendPosts;
  const trendPosts = safe(() => data!.trendPosts);
  const offset = safe(() => data!.trendPosts.length);
  console.log('offset', offset);
  return {
    trendPosts,
    refetch,
    offset,
    onLoadMoreByOffset
  };
}
