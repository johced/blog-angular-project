import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { BlogComponent } from '../components/blog/blog.component';
import { Blog } from '../models/Blog';
import { SwaggerResponse } from '../models/SwaggerResponse';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // private blogs: Blog[];
  // blogs$: Observable<Blog[]>;
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  createAndStoreBlog(title: string, userId: number, id: number) {
    const postData: Blog = { title: title, userId: 1010, id: id };
    this.http
      .post<{ title: string; id: number }>(
        'https://mi-blogs.azurewebsites.net/api/Blogs',
        postData
      )
      .subscribe((responseData) => {
        // console.log(postData);
        this.router
          .navigate(['/blog', responseData.id, responseData.title])
          .then(() => {
            // window.location.reload();
          });
      });
    // this.blogs$ = of(this.blogs);
  }

  getBlogs(): Observable<Blog[]> {
    const userId = 1010;
    return this.http.get<Blog[]>(
      'https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId
    );
    // .subscribe((data: SwaggerResponse) => {
    //   this.blogs.next(data.Search);
    // });
  }

  // getBlogs(): Observable<Blog[]> {
  //   const userId = 1010;
  //   return this.http.get<Blog[]>(
  //     'https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId
  //   );
  // }

  deleteBlog(blogId: number) {
    this.http
      .delete('https://mi-blogs.azurewebsites.net/api/Blogs/' + blogId)
      .subscribe(() => {
        this.router.navigate(['/new-blog']).then(() => {
          // console.log('test');
        });
      });
  }
}
