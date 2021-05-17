import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [];

  constructor(private http: HttpClient) {}

  createAndStoreBlog(title: string, userId: number) {
    const postData: Blog = { title: title, userId: 1010 };
    this.http
      .post<{ name: string }>(
        'https://mi-blogs.azurewebsites.net/api/Blogs',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getBlogs(): Observable<Blog[]> {
    const userId = 1010;
    return this.http.get<Blog[]>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId
    );
  }

  // deleteBlog() {
  //   const userId = 1010;
  //   return this.http.delete(
  //     'https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId
  //   );
  // }
}
