import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private http: HttpClient, private service: BlogService) {}

  ngOnInit(): void {
    // this.getBlogs();

    // this.service.getBlogs().subscribe((blogs) => {
    //   this.blogs = blogs;
    // });

    this.service.blogs$.subscribe((data: Blog[]) => {
      this.blogs = data;
    });
    this.service.getBlogs();
  }
}
