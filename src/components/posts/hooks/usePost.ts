import { useQuery, gql, useMutation } from '@apollo/client';
import { Post } from '../../../lib/graphql/post';
import { safe } from '../../../lib/utils';
import { useCallback } from 'react';
import client from '../../../client';

export const GET_POST = gql`
  query Post($id: ID, $userEmail: String, $urlPath: String) {
    post(id: $id, userEmail: $userEmail, urlPath: $urlPath) {
      id
      title
      body
      readIt
      likes
      liked
      saved
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

export const POST_READ = gql`
  mutation PostRead($id: ID!) {
    postRead(id: $id)
  }
`;

export const POST_SAVE = gql`
  mutation PostSave($id: ID!) {
    postSave(id: $id)
  }
`;

export const LIKE_POST = gql`
  mutation LikePost($id: ID!) {
    likePost(id: $id) {
      id
      likes
      liked
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation UnlikePost($id: ID!) {
    unlikePost(id: $id) {
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

  const [postRead] = useMutation(POST_READ);
  const onPostRead = useCallback(async () => {
    if (!post) return;
    if (!post.readIt) {
      try {
        const readFragment = gql`
          fragment post on Post {
            readIt
            viewsCount
          }
        `;
        client.writeFragment({
          id: `Post:${post.id}`,
          fragment: readFragment,
          data: {
            readIt: true,
            viewsCount: post.viewsCount + 1,
            __typename: 'Post'
          }
        });
        await postRead({
          variables: {
            id: post.id
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [post, postRead]);

  const [postSave] = useMutation(POST_SAVE);
  const onPostSave = useCallback(async () => {
    if (!post) return;
    if (!post.saved) {
      try {
        const saveFragment = gql`
          fragment post on Post {
            saved
          }
        `;
        client.writeFragment({
          id: `Post:${post.id}`,
          fragment: saveFragment,
          data: {
            saved: true,
            __typename: 'Post'
          }
        });
        await postSave({
          variables: {
            id: post.id
          }
        });
      } catch (e) {
        console.log(e);
      }
      alert('저장했습니다.');
    } else {
      alert('이미 저장목록에 있습니다.');
    }
  }, [post, postSave]);

  const [likePost, { loading: loadingLike }] = useMutation(LIKE_POST);
  const [unlikePost, { loading: loadingUnlike }] = useMutation(UNLIKE_POST);

  const onLikeToggle = useCallback(async () => {
    if (!post || loadingLike || loadingUnlike) return;
    const variables = {
      id: post.id
    };
    const likeFragment = gql`
      fragment post on Post {
        liked
        likes
      }
    `;
    try {
      if (post.liked) {
        client.writeFragment({
          id: `Post:${post.id}`,
          fragment: likeFragment,
          data: {
            liked: false,
            likes: post.likes - 1,
            __typename: 'Post'
          }
        });
        await unlikePost({
          variables
        });
      } else {
        client.writeFragment({
          id: `Post:${post.id}`,
          fragment: likeFragment,
          data: {
            liked: true,
            likes: post.likes + 1,
            __typename: 'Post'
          }
        });
        await likePost({
          variables
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, [likePost, loadingLike, loadingUnlike, post, unlikePost]);
  return {
    post,
    onPostRead,
    onPostSave,
    onLikeToggle
    // onLikePost,
    // onUnlikePost
  };
}
