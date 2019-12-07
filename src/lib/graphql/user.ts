import { Post } from './post';

export interface User {
  id: string;
  email: string;
  name: string;
  userProfile: UserProfile;
  posts: Post[];
}
export type CurrentUser = {
  id: string;
  email: string;
  name: string;
  userProfile: {
    id: string;
    about: string;
    thumbnail: string;
  };
};

export interface UserProfile {
  id: string;
  about: string;
  thumbnail: string;
  mobile: string;
}

export interface UserEmailConfirm {
  id: string;
  code: string;
  email: string;
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
