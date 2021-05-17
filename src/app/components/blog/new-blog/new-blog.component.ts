import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  blogs: Blog[] = [];
  // userId: number = 111666;

  constructor(private http: HttpClient, private blogsService: BlogService) {}

  ngOnInit(): void {}

  // onNewBlog(value: Blog) {
  //   this.blogs.push(value);
  //   console.log(this.blogs);
  //   console.log('input value: ' + value);
  // }

  // onNewBlog(postData: { title: string }) {
  //   // Send http request
  //   this.http
  //     .post('https://mi-blogs.azurewebsites.net/api/Blogs', postData)
  //     .subscribe((responseData) => {
  //       console.log(responseData);
  //     });
  // }

  onNewBlog(postData: Blog) {
    this.blogsService.createAndStoreBlog(postData.title, postData.userId);
  }
}
