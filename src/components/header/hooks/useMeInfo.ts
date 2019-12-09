import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../../../lib/graphql/user';

const GET_ME = gql`
  query Me {
    me {
      id
    }
  }
`;

export default function useMeInfo() {
  const { data, loading, error } = useQuery<{ me: User }>(GET_ME, {
    fetchPolicy: 'no-cache'
  });

  return {
    me: data && data.me,
    loading,
    error
  };
}
