import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Post } from '../../../lib/graphql/post';

const GET_POST_RECENT = gql`
  query Post {
    posts {
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
      }
    }
  }
`;

export default function usePosts() {
  const { data, loading, error } = useQuery<{ posts: Post[] }>(GET_POST_RECENT, {
    pollInterval: 1000 * 60 * 10
  });
  return {
    data,
    // recentPosts: data && data.post,
    // postTags: data && data.post.tags,
    // postImages: data && data.post.images,
    // postComments: data && data.post.comments,
    // postUser: data && data.post.user,
    loading,
    error
  };
}
