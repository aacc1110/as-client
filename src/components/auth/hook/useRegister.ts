import gql from 'graphql-tag';

export const GET_EMAIL_CONFIRM = gql`
  query UserEmailConfirm($code: String!) {
    userEmailConfirm(code: $code) {
      email
      code
      confirm
      createdAt
    }
  }
`;

export interface UserEmailConfirmResponse {
  userEmailConfirm: {
    email: string;
    code: string;
    confirm: boolean;
    createdAt: Date;
  };
}

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserProfileInput {
  thumbnail: string;
  about: string;
  mobile: string;
}

export const CREATE_ME = gql`
  mutation CreatMe($user: UserInput!, $userProfile: UserProfileInput) {
    createMe(userInput: $user, userProfileInput: $userProfile)
  }
`;

// export default function useRegister(code: string | null) {
//   const { data, loading } = useQuery(GET_EMAIL_CONFIRM, {
//     variables: {
//       code
//     },
//     fetchPolicy: 'no-cache'
//   });

//   return { register: data, loading };
// }
