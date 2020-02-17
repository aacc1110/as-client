import { User } from './user';
import { Comment } from './comment';
import { Series } from './series';

export interface Post {
  id: string;
  title: string;
  body: string;
  likes: number;
  isPublish: boolean;
  meta: JSON;
  viewsCount: number;
  shortSummary: string;
  urlPath: string;
  releasedAt: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  tags: Tag[];
  images: Image[];
  readIt: boolean;
  liked: boolean;
  saved: boolean;
  comments: Comment[];
  commentsCount: number;
  series: Series;
}
export interface Tag {
  id: string;
  tag: string;
  posts: Post[];
}
export interface Image {
  id: string;
  imageUrl: string;
  post: Post;
}
export interface PostInput {
  title: string;
  body: string;
  urlPath: string;
  tags: [string];
  imageUrl: [string];
}

export interface PostSave {
  id: string;
  user: User;
  post: Post;
}
