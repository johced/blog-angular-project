import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  postId: number = 0;

  // commentId: number = 0;
  comments: Comment[] = [];

  posts: Post[] = [];
  post: Post;

  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    // Hämtar id för bloggen vi är på
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });

    this.service.posts$.subscribe((post) => {
      this.posts = post;
    });

    this.service.comments$.subscribe((comment) => {
      this.comments = comment;
    });

    this.service.getComments();
    // Hämtar bloggen vi är på, för att kunna pusha post till den.
    this.service.getPost(this.postId).subscribe((data) => {
      this.post = data;
    });
  }
}
