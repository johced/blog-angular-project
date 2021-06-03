import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
})
export class ShowPostComponent implements OnInit {
  postId: number = 0;
  posts: Post[] = [];

  post: Post;

  blogs: Blog[] = [];
  blog: Blog;

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
    });
  }

  onDeletePost(id: number) {
    this.service.deletePost(id);
    this.location.back();
  }

  back() {
    this.location.back();
  }
}
