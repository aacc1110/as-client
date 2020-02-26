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
  seriesPosts: SeriesPosts[];
  thumbnail: string;
  postsCount: number;
}
export interface SeriesPosts {
  id: string;
  index: number;
  post: Post;
}
