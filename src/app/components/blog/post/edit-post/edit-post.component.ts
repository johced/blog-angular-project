import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  @ViewChild('f') postForm: NgForm;
  postId: number = 0;

  posts: Post[] = [];
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = parseInt(params.get('id'));
    });

    this.service.posts$.subscribe((post) => {
      this.posts = post;
    });

    this.service.getPosts();

    this.service.getPost(this.postId).subscribe((post) => {
      this.post = post;

      console.log(this.post);
    });
  }

  onUpdatePost(postData: Post) {
    let updatepost = new Post(
      postData.title,
      postData.content,
      this.post.blogId,
      this.postId
    );

    this.service.updatePost(updatepost).subscribe((poster) => {
      this.service.getPost(this.postId).subscribe((data) => {
        this.post = data;
        this.service.getPosts();
      });
      console.log(poster);
    });
    this.postForm.reset();
  }
}
