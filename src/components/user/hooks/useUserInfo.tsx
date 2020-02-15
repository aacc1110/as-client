import { User } from '../../../lib/graphql/user';
import { useQuery, gql } from '@apollo/client';

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
      seriesList {
        id
      }
      posts {
        id
        title
        likes
        liked
        body
        meta
        viewsCount
        urlPath
        user {
          id
          name
        }
      }
    }
  }
`;

export default function useUserInfo(useremail: string | undefined) {
  const { data, loading, error } = useQuery<{ user: User }>(GET_USER, {
    variables: {
      email: useremail
    },
    fetchPolicy: 'cache-and-network'
  });

  return {
    user: data && data.user,
    userProfile: data && data.user.userProfile,
    posts: data && data.user.posts,
    seriesList: data && data.user.seriesList,
    loading,
    error
  };
}
