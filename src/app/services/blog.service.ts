import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  createAndStoreBlog(title: string, userId: number) {
    const postData: Blog = { title: title, userId: 1010 };
    this.http
      .post<{ title: string; id: number }>(
        'https://mi-blogs.azurewebsites.net/api/Blogs',
        postData
      )
      .subscribe((responseData) => {
        console.log(postData);
        this.router
          .navigate(['/blog', responseData.id, responseData.title])
          .then(() => {
            window.location.reload();
          });
      });
  }

  getBlogs(): Observable<Blog[]> {
    const userId = 1010;
    return this.http.get<Blog[]>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId
    );
  }
}
