export class Comment {
  id: number;
  content: string;
  postId: number;
  constructor(content: string, postId: number) {
    this.id = 0;
    this.content = content;
    this.postId = postId;
  }
}
