import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CHECKUSER = gql`
  mutation CheckUser($email: String!) {
    checkUser(email: $email)
  }
`;

const SENDEMAIL = gql`
  mutation SendEmail($email: String!) {
    sendEmail(email: $email)
  }
`;

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
        userProfile {
          id
          about
          thumbnail
        }
      }
    }
  }
`;
interface GetLoginResponse {
  login: {
    user: {
      id: string;
      email: string;
      name: string;
      userprofile: {
        about: string;
        id: string;
        thumbnail: string | null;
      };
    };
  };
}

export default function useLogin() {
  const [checkUser] = useMutation<{ email: string }>(CHECKUSER, {
    fetchPolicy: 'no-cache'
  });
  const [sendEmail] = useMutation<{ email: string }>(SENDEMAIL, {
    fetchPolicy: 'no-cache'
  });
  const [login, { data, error }] = useMutation<GetLoginResponse>(LOGIN, {
    fetchPolicy: 'no-cache'
  });
  // const onLogin = useCallback(
  //   (params: { email: string; password: string }) => {
  //     return login({
  //       variables: {
  //         email: params.email,
  //         password: params.password
  //       }
  //     });
  //   },
  //   [login]
  // );
  // if (data) {
  //   document.location.href = '/';
  // }
  if (data) {
    console.log(data.login.user.email);
  }

  return { login, data, error, checkUser, sendEmail };
}
