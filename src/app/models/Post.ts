// import { Comment } from './Comment';

export class Post {
  id: number;
  // title: string;
  content: string;
  // created: string;
  // modified: string;
  // blog: {};
  // comments: Comment[] = [];
  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }
}
