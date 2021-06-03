import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
})
export class EditBlogComponent implements OnInit {
  @ViewChild('f') postForm: NgForm;
  blogId: number = 0;
  userId: number = 1010;
  blogs: Blog[] = [];
  blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private location: Location
  ) {}

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

      console.log(this.blog);
    });
  }

  onUpdateBlog(postData: Blog) {
    let updateblog = new Blog(postData.title, this.userId, this.blogId);

    this.service.updateBlog(updateblog).subscribe((blog) => {
      this.service.getBlog(this.blogId).subscribe((data) => {
        this.blog = data;
        this.service.getBlogs();
      });
    });
    this.postForm.reset();
  }

  back() {
    this.location.back();
  }
}
