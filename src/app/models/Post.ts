import { Comment } from './Comment';
let time = new Date();
export class Post {
  id: number;
  title: string;
  content: string;
  created: string;
  modified: string;
  blogId: number;
  comments: Comment[];

  constructor(title: string, content: string, blogId: number) {
    this.id = 0;
    this.title = title;
    this.content = content;
    this.blogId = blogId;
    this.created = time.toISOString();
    this.modified = time.toISOString();
    this.comments = [];
  }
}
