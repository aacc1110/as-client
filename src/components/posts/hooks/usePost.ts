import { useQuery, gql, useMutation } from '@apollo/client';
import { Post } from '../../../lib/graphql/post';
import { safe } from '../../../lib/utils';
import { useCallback } from 'react';

export const GET_POST = gql`
  query Post($id: ID, $userEmail: String, $urlPath: String) {
    post(id: $id, userEmail: $userEmail, urlPath: $urlPath) {
      id
      title
      body
      likes
      liked
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
      commentsCount
      comments {
        id
        text
        level
        like
        hate
        hasReplies
        deleted
        createdAt
        user {
          id
          name
          email
          userProfile {
            id
            thumbnail
            imageUrl
          }
        }
        repliesCount
        replies {
          id
          text
          level
          deleted
          createdAt
          user {
            id
            name
            email
            userProfile {
              id
              thumbnail
              imageUrl
            }
          }
        }
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

export const LIKE_POST = gql`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes
      liked
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation UnlikePost($postId: ID!) {
    unlikePost(postId: $postId) {
      id
      likes
      liked
    }
  }
`;

export default function usePost(
  userEmail: string | undefined,
  urlPath: string | undefined
) {
  const getPost = useQuery<{ post: Post }>(GET_POST, {
    variables: {
      userEmail,
      urlPath
    },
    fetchPolicy: 'cache-first'
  });

  const { data } = getPost;
  const post = safe(() => data!.post);

  const [likePost] = useMutation<{ post: Post }>(LIKE_POST);
  const onLikePost = useCallback(
    (postId: string) => {
      console.log(postId);
      return likePost({
        variables: {
          postId
        }
      });
    },
    [likePost]
  );

  const [unlikePost] = useMutation<{ post: Post }>(UNLIKE_POST);
  const onUnlikePost = useCallback(
    (postId: string) => {
      console.log(postId);
      return unlikePost({
        variables: {
          postId
        }
      });
    },
    [unlikePost]
  );
  return {
    post,
    onLikePost,
    onUnlikePost
  };
}
