import { User } from './user';

export interface Post {
  id: string;
  title: string;
  body: string;
  isPublish: boolean;
  meta: JSON;
  viewsCount: number;
  shortSummary: string;
  urlPath: string;
  releasedAt: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  images: Image[];
  tags: Tag[];
  comments: Comment[];
}
export interface Image {
  id: string;
  imageUrl: string;
  post: Post;
}

export interface Tag {
  id: string;
  tag: string;
  posts: Post[];
}

export interface Comment {
  id: string;
  comment: string;
  level: number;
  user: User;
  post: Post;
}
