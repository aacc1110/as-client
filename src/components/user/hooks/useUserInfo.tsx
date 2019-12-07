import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../../../lib/graphql/user';

const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      id
      name
      email
      userProfile {
        id
        about
        imageUrl
        thumbnail
        mobile
      }
      posts {
        id
        title
        body
        meta
        views_count
        url_path
      }
    }
  }
`;

export default function useUserInfo(pathname: string | undefined) {
  const { data, loading, error } = useQuery<{ user: User }>(GET_USER, {
    variables: {
      email: pathname
    },
    fetchPolicy: 'cache-and-network'
  });

  return {
    user: data && data.user,
    userProfile: data && data.user.userProfile,
    posts: data && data.user.posts,
    loading,
    error
  };
}
