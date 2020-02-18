import { User } from './user';
import { Post } from './post';

export interface Series {
  id: string;
  user: User;
  name: string;
  description: string;
  urlPath: string;
  createdAt: string;
  updatedAt: string;
  seriesPosts: SeriesPost[];
  thumbnail: string;
  postsCount: number;
}
export interface SeriesPost {
  id: string;
  index: number;
  post: Post;
}
