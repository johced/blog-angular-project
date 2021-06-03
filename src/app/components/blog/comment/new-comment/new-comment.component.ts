import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
})
export class NewCommentComponent implements OnInit {
  @ViewChild('f') postForm: NgForm;

  posts: Post[] = [];
  postId: number = 0;
  post: Post;

  comments: Comment[] = [];
  comment: Comment[] = [];

  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });
  }

  onNewComment(postData: Comment) {
    let newcomment = new Comment(postData.content, this.postId);
    this.service.addComment(newcomment).subscribe((comment) => {
      this.service.getPost(this.postId).subscribe((data) => {
        this.post = data;
        this.service.getComments();
      });
    });
    this.postForm.reset();
  }
}
