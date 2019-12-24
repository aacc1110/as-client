import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Post } from '../../../lib/graphql/post';
import { useCallback } from 'react';

const GET_POST_RECENT = gql`
  query Post($cursor: ID) {
    posts(cursor: $cursor) {
      id
      title
      body
      isPublish
      meta
      viewsCount
      shortSummary
      urlPath
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
        comment
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

  return {
    posts: getPostRecent.data && getPostRecent.data.posts,
    onLoadMore
    // recentPosts: data && data.post,
    // postTags: data && data.post.tags,
    // postImages: data && data.post.images,
    // postComments: data && data.post.comments,
    // postUser: data && data.post.user,
  };
}
