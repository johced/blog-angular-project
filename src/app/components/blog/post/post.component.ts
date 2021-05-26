import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() showpost: boolean = false;

  blogId: number = 0;
  posts: Post[] = [];
  blog: Blog;

  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    // Hämtar id för bloggen vi är på
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });

    this.service.posts$.subscribe((post) => {
      this.posts = post;
    });

    this.service.getPosts();

    // Hämtar bloggen vi är på, för att kunna pusha post till den.
    this.service.getBlog(this.blogId).subscribe((blog) => {
      this.blog = blog;
    });
  }
}
