import { Post } from '../../../lib/graphql/post';
import { useCallback } from 'react';
import { safe } from '../../../lib/utils';
import { useQuery, gql } from '@apollo/client';

export const GET_POST_RECENT = gql`
  query PostList($cursor: ID) {
    posts(cursor: $cursor) {
      id
      title
      body
      isPublish
      meta
      viewsCount
      shortSummary
      urlPath
      releasedAt
      createdAt
      images {
        id
        imageUrl
      }
      tags {
        id
        tag
      }
      comments {
        id
        text
        level
      }
      user {
        id
        email
        name
        userProfile {
          id
          thumbnail
          imageUrl
        }
      }
    }
  }
`;

export default function usePosts() {
  const getPostRecent = useQuery<{ posts: Post[] }>(GET_POST_RECENT, {
    pollInterval: 1000 * 60 * 5
    // notifyOnNetworkStatusChange: true
  });

  // const { data, loading } = getPostRecent;
  const onLoadMore = useCallback(
    (cursor: string) => {
      getPostRecent.fetchMore({
        variables: {
          cursor
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            posts: [...prev.posts, ...fetchMoreResult.posts]
          };
        }
      });
    },
    [getPostRecent]
  );

  const { data, refetch } = getPostRecent;
  const posts = safe(() => data!.posts);
  const cursor = safe(() => (posts ? posts[posts.length - 1].id : null));

  return {
    posts,
    refetch,
    cursor,
    onLoadMore
    // recentPosts: data && data.post,
    // postTags: data && data.post.tags,
    // postImages: data && data.post.images,
    // postComments: data && data.post.comments,
    // postUser: data && data.post.user,
  };
}
