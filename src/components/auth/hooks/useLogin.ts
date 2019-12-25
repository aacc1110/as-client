import { useMutation, gql } from '@apollo/client';

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
      userProfile: {
        id: string;
        about: string;
        thumbnail: string | null;
      };
    };
  };
}

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export default function useLogin() {
  const [checkUser] = useMutation<{ email: string }>(CHECKUSER, {
    fetchPolicy: 'no-cache'
  });
  const [sendEmail] = useMutation<{ email: string }>(SENDEMAIL, {
    fetchPolicy: 'no-cache'
  });
  const [login, { data }] = useMutation<GetLoginResponse>(LOGIN, {
    fetchPolicy: 'no-cache'
  });
  const [logout] = useMutation<boolean>(LOGOUT, {
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
  //   localStorage.setItem('CurrentUser', JSON.stringify(loginUser));
  //   document.location.href('/');
  // }
  console.log('login data', data);
  return {
    checkUser,
    sendEmail,
    login,
    logout
  };
}
