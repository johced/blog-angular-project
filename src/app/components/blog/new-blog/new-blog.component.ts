import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private blogsService: BlogService
  ) {}

  ngOnInit(): void {}

  onNewBlog(postData: Blog) {
    this.blogsService.createAndStoreBlog(postData.title, postData.userId);
  }
}
