import { User } from './user';
import { Post } from './post';

export interface Comment {
  id: string;
  text: string;
  level: number;
  like: number;
  hate: number;
  hasReplies: boolean;
  replies: Comment[];
  repliesCount: number;
  deleted: boolean;
  createdAt: string;
  user: User;
  post: Post;
}
