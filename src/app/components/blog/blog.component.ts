import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  blogId: number = 0;
  showpost: boolean = false;
  buttonname: string = 'New post';
  blog: Blog;

  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = parseInt(params.get('id'));
    });

    this.service.blogs$.subscribe((blog) => {
      this.blogs = blog;
    });
    this.service.getBlogs();

    this.service.getBlog(this.blogId).subscribe((blog) => {
      this.blog = blog;
    });
  }

  onDeleteBlog(): void {
    let blog: number = this.blogId;
    this.service.deleteBlog(blog);
  }

  onToggleNewPost() {
    this.showpost = !this.showpost;
    this.showpost === true
      ? (this.buttonname = 'Close post')
      : (this.buttonname = 'New post');
  }
}
