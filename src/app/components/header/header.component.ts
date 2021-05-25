import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.blogs$.subscribe((blog) => {
      this.blogs = blog;
    });
    this.service.getBlogs();
  }
}
