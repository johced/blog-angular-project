import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  user: { id: number };

  constructor(
    private route: ActivatedRoute,

    private service: BlogService
  ) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
    };
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
    });

    this.service.blogs$.subscribe((blog) => {
      this.blogs = blog;
    });
    this.service.getBlogs();
  }

  onDeleteBlog(): void {
    let blog: number = this.user.id;
    this.service.deleteBlog(blog);
  }
}
