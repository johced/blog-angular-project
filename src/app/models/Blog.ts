import { Post } from './Post';

let time = new Date();

export class Blog {
  id: number;
  title: string;
  created?: string;
  userId: number;
  posts: Post[];

  constructor(title: string, userId: number) {
    this.id = 0;
    this.title = title;
    this.created = time.toISOString();
    this.userId = userId;
    this.posts = [];
  }
}
