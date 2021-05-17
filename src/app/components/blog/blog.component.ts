import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
    private blogsService: BlogService
  ) {}

  ngOnInit(): void {
    this.getBlogs();

    this.user = {
      id: this.route.snapshot.params['id'],
    };
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
    });
  }

  getBlogs(): void {
    this.blogsService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  onDeleteBlog() {
    this.http
      .delete('https://mi-blogs.azurewebsites.net/api/Blogs/' + this.user.id)
      .subscribe(() => {
        console.log('You successfully deleted Blog');
      });
  }
}
